import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
    input: 'src/DynamicYieldKit.js',
    output: {
        file: 'DynamicYieldKit.js',
        format: 'umd',
        exports: 'named',
        name: 'mp-dynamicYield-kit',
        strict: false
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs()
    ]
},
{
    input: 'src/DynamicYieldKit.js',
    output: {
        file: 'dist/DynamicYieldKit.js',
        format: 'umd',
        exports: 'named',
        name: 'mp-dynamicYield-kit',
        strict: false
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs()
    ]
}
] 