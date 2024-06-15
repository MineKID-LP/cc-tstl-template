import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

function copyLuaFilesRecursive(sourceDir: string, outDir: string) {
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    fs.readdirSync(sourceDir).forEach(file => {
        const srcFile = path.join(sourceDir, file);
        const destFile = path.join(outDir, file);

        if (fs.statSync(srcFile).isDirectory()) {
            // Recursively copy files in subdirectories
            copyLuaFilesRecursive(srcFile, destFile);
        } else if (path.extname(file) === '.lua') {
            // Copy only .lua files
            fs.copyFileSync(srcFile, destFile);
        }
    });
}

function copyLuaFiles(outDir: string) {
    const sourceDir = path.resolve(__dirname, 'lib');
    copyLuaFilesRecursive(sourceDir, outDir);
}

function getOutDirFromTsConfig(configPath: string): string {
    const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
    const configParseResult = ts.parseJsonConfigFileContent(configFile.config, ts.sys, path.dirname(configPath));
    return configParseResult.options.outDir || 'dist';
}

export default function customTransformer(): ts.TransformerFactory<ts.SourceFile> {
    const configPath = ts.findConfigFile(__dirname, ts.sys.fileExists, 'tsconfig.json');
    const outDir = configPath ? getOutDirFromTsConfig(configPath) : 'dist';

    return (context: ts.TransformationContext) => {
        return (sourceFile: ts.SourceFile) => {
            if (!sourceFile.isDeclarationFile) {
                console.log("Invoked copy!")
                copyLuaFiles(outDir);
            }
            return sourceFile;
        };
    };
}
