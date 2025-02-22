//your JS code here. If required.
function getBrowserInfo() {
            const userAgent = navigator.userAgent;
            let browserName = "Unknown";
            let version = "Unknown";

            if (userAgent.indexOf("OPR") > -1) {
                browserName = "Opera";
                version = userAgent.match(/OPR\/(\d+\.\d+\.\d+\.\d+)/)[1];
            } else if (userAgent.indexOf("Edg") > -1) {
                browserName = "Edge";
                version = userAgent.match(/Edg\/(\d+\.\d+\.\d+\.\d+)/)[1];
            } else if (userAgent.indexOf("Chrome") > -1) {
                browserName = "Chrome";
                version = userAgent.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/)[1];
            } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
                browserName = "Safari";
                version = userAgent.match(/Version\/(\d+\.\d+)/)[1];
            } else if (userAgent.indexOf("Firefox") > -1) {
                browserName = "Firefox";
                version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
            } else if (userAgent.indexOf("Trident") > -1) {
                browserName = "Internet Explorer";
                version = userAgent.match(/rv:(\d+\.\d+)/)[1];
            }

            document.getElementById("browser-info").textContent = 
                "You are using " + browserName + " version " + version;
        }

        getBrowserInfo();