/**
 * Metro配置文件
 * 用于配置React Native项目的打包和转换规则
 * 特别处理SVG文件的加载
 */
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    // 修改资源扩展名和源代码扩展名配置
    const { transformer, resolver } = config;

    // 配置SVG转换器
    transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

    // 从资源扩展名中过滤掉SVG
    resolver.assetExts = resolver.assetExts.filter((ext) => ext !== "svg");

    // 将SVG添加到源代码扩展名中
    resolver.sourceExts = [...resolver.sourceExts, "svg"];

    return config;
})();
