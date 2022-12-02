import React from 'react'

export default function Chatbot() {
    React.useEffect(() => {

        (function (d, m) {
            var kommunicateSettings =
                { "appId": "19d075af8fe56f621dc8b2fe429b2ad65", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; 
            h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});

    })
    return (
        <div></div>
    )
}
