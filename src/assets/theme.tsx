// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { createMuiTheme } from "@material-ui/core/styles";
// Localization
// https://material-ui.com/guides/localization/
import { jaJP } from "@material-ui/core/locale";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#EEAF18"
        }
    },
    typography: {
        button: {
            textTransform: "none"
        }
    }
}, jaJP);

export default theme;