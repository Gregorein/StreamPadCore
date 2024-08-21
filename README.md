![StreamPadCore Logo](public/logo.png)

# StreamPadCore

StreamPadCore is a shared UI and utility library for the StreamPad project, providing reusable controls and tools across the StreamPad desktop application, web UI customization tool, and companion app.


## Overview

This library includes a library of controls shipped by default with the StreamPad app.

Each control is structured to include the following:

- **Control**: The main React component.
- **Template**: A simplified or static representation of the control used in the StreamPad EditorUI (in the library/gallery views).
- **API**: Descriptions of the control's available methods and events.
- **Metadata**: Information such as version, author, license, and dependencies.
- **Initialization**: An optional `initialize` function for setup tasks when the control is loaded.

## Getting Started

To get started with StreamPad, clone the repository and follow the instructions below:

```bash
yarn add git@github.com:Gregorein/StreamPadCore.git
```

then run storybook:

```bash
yarn storybook
```

This will let you preview the controls, their templates and read about usage and customization options.

### Building own controls

To build your own control, start with generating a boilerplate using the following command:

```bash
yarn generate
```
The script will guide you through naming, addid initial description and setting up the control. You'll be able to change all these entries later, but the created files are required for the control to work.

## Roadmap

* Implement update check and download in the StreamPad App.
* Handle versioning and compatibility.
* Implement dynamic component loading.
* Document the process for developing custom controls.
* Provide example custom controls and test their integration.
* Set up CI for releases.
* Engage with the community and iterate based on feedback.

## License

StreamPadCore is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contribution

We welcome contributions! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.
