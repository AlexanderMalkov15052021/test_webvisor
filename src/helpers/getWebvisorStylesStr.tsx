import * as AllStyledComponents from "../AllStyledComponents/AllStyledComponents";

export const getWebvisorStylesStr = () => {
    const modulesComponentsNames = Object.keys(AllStyledComponents);

    const modulesComponents = modulesComponentsNames.map(name =>
      AllStyledComponents[name as keyof typeof AllStyledComponents]
    );
    
    const styledComponentsNames = modulesComponentsNames.map(
      module => Object
        .keys(AllStyledComponents[module as keyof typeof AllStyledComponents])
    );
    
    const styledComponents = styledComponentsNames.map((names, index) =>
      names.map(name => {
        const moduleComponent = modulesComponents[index]
        return moduleComponent[name as keyof typeof moduleComponent];
      })).flat();
    
    const webvisorStylesStr = styledComponents.map((moduleComponent: any) => `
      .${moduleComponent.styledComponentId} {
        ${moduleComponent.componentStyle.rules}
      }
    `).join('');

    return webvisorStylesStr
}
