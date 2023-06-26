import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.generateCleanArchitectureWithBloc', async () => {
    // Prompt the user for the project name
    const projectName = await vscode.window.showInputBox({ prompt: 'Enter the project name' });
    if (!projectName) {
      return;
    }

    // Create the project directory
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
      return;
    }
    const projectDir = path.join(workspaceFolders[0].uri.fsPath, projectName);
    fs.mkdirSync(projectDir);

    // Create the clean architecture directories
    const dataDir = path.join(projectDir, 'data');
    fs.mkdirSync(dataDir);
    const dataSourcesDir = path.join(dataDir, 'data_sources');
    fs.mkdirSync(dataSourcesDir);
    const modelsDir = path.join(dataDir, 'models');
    fs.mkdirSync(modelsDir);
    const repositoriesDir = path.join(dataDir, 'repositories');
    fs.mkdirSync(repositoriesDir);

    const domainDir = path.join(projectDir, 'domain');
    fs.mkdirSync(domainDir);
    const entitiesDir = path.join(domainDir, 'entities');
    fs.mkdirSync(entitiesDir);
    const domainRepositoriesDir = path.join(domainDir, 'repositories');
    fs.mkdirSync(domainRepositoriesDir);
    const useCasesDir = path.join(domainDir, 'use_cases');
    fs.mkdirSync(useCasesDir);

    const presentationDir = path.join(projectDir, 'presentation');
    fs.mkdirSync(presentationDir);
    const blocsDir = path.join(presentationDir, 'blocs');
    fs.mkdirSync(blocsDir);
    const pagesDir = path.join(presentationDir, 'pages');
    fs.mkdirSync(pagesDir);

    // Prompt the user for the names of the data source files to create
    const dataSourceFiles = await vscode.window.showInputBox({ prompt: 'Enter the names of the data source files to create (comma-separated)' });
    if (dataSourceFiles) {
      dataSourceFiles.split(',').forEach((fileName) => {
        fs.writeFileSync(path.join(dataSourcesDir, `${fileName.trim()}.dart`), '');
      });
    }

    // Prompt the user for the names of the model files to create
    const modelFiles = await vscode.window.showInputBox({ prompt: 'Enter the names of the model files to create (comma-separated)' });
    if (modelFiles) {
      modelFiles.split(',').forEach((fileName) => {
        fs.writeFileSync(path.join(modelsDir, `${fileName.trim()}.dart`), '');
      });
    }
	    // Prompt the user for the names of the repository files to create
    const repositoryFiles = await vscode.window.showInputBox({ prompt: 'Enter the names of the repository files to create (comma-separated)' });
    if (repositoryFiles) {
      repositoryFiles.split(',').forEach((fileName) => {
        fs.writeFileSync(path.join(repositoriesDir, `${fileName.trim()}.dart`), '');
      });
    }

    // Prompt the user for the names of the entity files to create
    const entityFiles = await vscode.window.showInputBox({ prompt: 'Enter the names of the entity files to create (comma-separated)' });
    if (entityFiles) {
      entityFiles.split(',').forEach((fileName) => {
        fs.writeFileSync(path.join(entitiesDir, `${fileName.trim()}.dart`), '');
      });
    }

    // Prompt the user for the names of the domain repository files to create
    const domainRepositoryFiles = await vscode.window.showInputBox({ prompt: 'Enter the names of the domain repository files to create (comma-separated)' });
    if (domainRepositoryFiles) {
      domainRepositoryFiles.split(',').forEach((fileName) => {
        fs.writeFileSync(path.join(domainRepositoriesDir, `${fileName.trim()}.dart`), '');
      });
    }

    // Prompt the user for the names of the use case files to create
    const useCaseFiles = await vscode.window.showInputBox({ prompt: 'Enter the names of the use case files to create (comma-separated)' });
    if (useCaseFiles) {
      useCaseFiles.split(',').forEach((fileName) => {
        fs.writeFileSync(path.join(useCasesDir, `${fileName.trim()}.dart`), '');
      });
    }

    // Prompt the user for the names of the BLoC files to create
    const blocFiles = await vscode.window.showInputBox({ prompt: 'Enter the names of the BLoC files to create (comma-separated)' });
    if (blocFiles) {
      blocFiles.split(',').forEach((fileName) => {
        fs.writeFileSync(path.join(blocsDir, `${fileName.trim()}.dart`), '');
      });
    }

    // Prompt the user for the names of the page files to create
    const pageFiles = await vscode.window.showInputBox({ prompt: 'Enter the names of the page files to create (comma-separated)' });
    if (pageFiles) {
      pageFiles.split(',').forEach((fileName) => {
        fs.writeFileSync(path.join(pagesDir, `${fileName.trim()}.dart`), '');
      });
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
