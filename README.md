![StreamPadCore Logo](public/logo.png)

# StreamPadCore

StreamPadCore is a shared UI and utility library for the StreamPad project, providing reusable components and tools across the StreamPad desktop application, web UI customization tool, and companion app.


## Overview

This library includes a list of components shipped by default with the StreamPad app.

Each component is structured to include the following:

- **Component**: The main React component.
- **TemplateComponent**: A simplified or static representation of the component used in the StreamPad EditorUI.
- **API**: Descriptions of the component's available methods and events.
- **Metadata**: Information such as version, author, license, and dependencies.
- **Initialization**: An optional `initialize` function for setup tasks when the component is loaded.

## Getting Started

To get started with StreamPad, clone the repository and follow the instructions below:

```bash
yarn add git@github.com:Gregorein/StreamPadCore.git
```

then run storybook:

```bash
yarn storybook
```

## Roadmap and Development Phases

### Phase 1: Design the Package Structure
* Define package contents and controls-manifest.json schema.
* Develop packaging scripts.
### Phase 2: Develop the Update Mechanism
* Implement update check and download in the StreamPad App.
* Handle versioning and compatibility.
### Phase 3: StreamPad App Integration
* Implement dynamic component loading.
* Define and implement the component interface for interaction with the app and plugins.
### Phase 4: Support for Custom Controls
* Document the process for developing custom controls.
* Provide example custom controls and test their integration.
### Phase 5: Finalize and Deploy
* Set up CI for releases.
* Engage with the community and iterate based on feedback.

## License

StreamPadCore is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contribution

We welcome contributions! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.
