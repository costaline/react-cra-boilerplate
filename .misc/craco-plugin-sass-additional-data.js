const path = require('path')

function createUseLines(baseDir, resources, tail) {
	return resources.reduce((target, resource) => {
		const relativePath = path.relative('src', baseDir).replace(/\\/g, '/')

		const use = `@use 'src/${relativePath}/${resource}' as *` + tail + '\r\n'

		return target + use
	}, '')
}

module.exports = {
	overrideCracoConfig: ({
		cracoConfig,
		pluginOptions,
		context: { env, paths },
	}) => {
		const { pathToFile } = pluginOptions
		const pathToDir = pathToFile.split('/').slice(0, -1).join('/')

		let additionalResources = null

		try {
			additionalResources = require(path.resolve(process.cwd(), pathToFile))
		} catch(error) {
			console.log(`File "${pathToFile}" not found`)
		}

		if (!additionalResources?.length) return cracoConfig

		const cracoLoaderOptions = cracoConfig.style.sass?.loaderOptions

		cracoConfig.style.sass = {
			loaderOptions: (sassLoaderOptions, { env, paths }) => {
				let cracoAdditionalData

				if (cracoLoaderOptions) {
					cracoAdditionalData = cracoLoaderOptions(sassLoaderOptions, {
						env,
						paths,
					}).additionalData
				}

				sassLoaderOptions.additionalData = (content, loaderContext) => {
					let prev

					if (cracoAdditionalData) {
						prev = cracoAdditionalData(content, loaderContext)
					}

					const { resourcePath } = loaderContext

					const tail = /\.sass$/i.test(resourcePath) ? '' : ';'
					const useLines = createUseLines(pathToDir, additionalResources, tail)

					return useLines + '\r\n' + (prev ? prev : content)
				}

				return sassLoaderOptions
			},
		}

		return cracoConfig
	},
}
