"use strict";

var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HelpModal = function HelpModal(_ref) {
  var onClose = _ref.onClose,
    version = _ref.version;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "modal-overlay",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "modal",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          children: "\u2753 Hilfe zur Anwendung"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "modal-close",
          onClick: onClose,
          children: "\xD7"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          paddingRight: '1rem',
          maxHeight: '60vh',
          overflowY: 'auto'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Willkommen bei der Hilfe f\xFCr Ihre Anwendung zur p\xE4dagogischen Dokumentation."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "\uD83D\uDC65 1. Kinder verwalten"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Kind anlegen:"
            }), " Klicken Sie auf \"\uD83D\uDC65 Kind hinzuf\xFCgen\" in der Werkzeugleiste"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Kind bearbeiten:"
            }), " W\xE4hlen Sie ein Kind aus und klicken auf \"\u270F\uFE0F Kind bearbeiten\""]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Kind suchen:"
            }), " Nutzen Sie das Suchfeld in der Navigation"]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "\uD83D\uDCDD 2. Eintr\xE4ge verwalten"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Neuer Eintrag:"
            }), " W\xE4hlen Sie ein Kind aus und klicken auf \"\uD83D\uDCDD Eintrag hinzuf\xFCgen\""]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Eintrag bearbeiten:"
            }), " W\xE4hlen Sie einen Eintrag aus und klicken auf \"\uD83D\uDD27 Eintrag bearbeiten\""]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "\uD83D\uDCBE 3. Datenmanagement"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Exportieren:"
            }), " \"\uD83D\uDCBE Exportieren\" erstellt eine Sicherungsdatei"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Importieren:"
            }), " \"\uD83D\uDCE5 Importieren\" l\xE4dt eine Sicherung"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Drucken:"
            }), " \"\uD83D\uDDA8\uFE0F Drucken\" erstellt einen Ausdruck"]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "\u2699\uFE0F 4. Einstellungen"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Farbschema:"
            }), " W\xE4hlen Sie zwischen hell, dunkel oder kontrastreich"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Schriftgr\xF6\xDFe:"
            }), " Anpassbar in den Einstellungen"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Stammdaten:"
            }), " Verwalten Sie Schuljahre, Schulen und Klassen"]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Ihre Einstellungen werden automatisch im Browser gespeichert."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-actions",
        style: {
          marginTop: '1rem'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "button button-success",
          onClick: onClose,
          children: "\u2714\uFE0F Verstanden"
        })
      }), version && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          marginTop: '1rem',
          fontSize: '0.8rem',
          color: '#666',
          textAlign: 'center'
        },
        children: ["Version ", version]
      })]
    })
  });
};

// Globale Registrierung als window-Modul
window.HelpModal = HelpModal;