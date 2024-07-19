function creatediv(message){
    let buttons = document.createElement("button");
    let main_divs = document.createElement("div");
    let child_divs = document.createElement("div");
    let para = document.createElement("p");
    buttons.className = "btn-close";
    main_divs.className = "like-dislike-container";
    child_divs.className="tool-box";
    para.className="text-content";
    para.innerHTML=message;
    child_divs.appendChild(buttons);
    main_divs.appendChild(child_divs); 
    main_divs.appendChild(para);
    let mainDiv = document.getElementById("maincomments");
    mainDiv.appendChild(main_divs);
}
window.onload = function() {
    readcomments();
};
let main_count=0;
let global_variable={}
async function readcomments() {
    try {
        const url = `/report/comment.json`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        Object.entries(data).forEach(([key, value]) => {
            main_count+=1;
            creatediv(value);
        });
    } catch (error) {
        console.error('Error fetching or iterating over JSON data:', error);
    }
    try {
        let spanvalue=document.getElementById("likecount");
        const url = `/report/likecount.json`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        let v=0;
        Object.entries(data).forEach(([key, value]) => {
            global_variable[key]=value;
            v=value;
        });
        spanvalue.innerHTML=v;
    } catch (error) {
        console.error('Error fetching or iterating over JSON data:', error);
    }
}
async function writeJsonToFile(filename, data) {
    try {
        const response = await fetch(`/writecomment-json/${filename}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result.success) {
            console.log(``);
        } else {
            console.error('Error:', result.message);
        }
    } catch (error) {
        console.error('Error writing to JSON file:', error);
    }
}

async function fetchAndCountJsonEntries(filename) {
    try {
        const response = await fetch(`/readcomment-json/${filename}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message);
        }
        const data = result.data;
        const entryCount = Object.keys(data).length;
        return entryCount;
    } catch (error) {
        console.error('Error fetching or counting JSON entries:', error);
        return 0;
    }
}
function sendcomments(){
    useEntryCount();
}
async function useEntryCount() {
    let currentuserid=sessionStorage.getItem("main_user_id");
    let value=document.getElementById("input").value;
    let filename="comment.json";
    try {
        const count = await fetchAndCountJsonEntries(filename);
        const completeuserid="user"+count+"_"+currentuserid;
        const data={
            [completeuserid]:value
        };
        writeJsonToFile(filename, data);
    } catch (error) {
        console.error('Error using entry count:', error);
    }
    let value1=document.getElementById("input");
    value1.value='';
}
let sub=document.getElementById("buttonz");
sub.addEventListener("click", () => {
    let chats = document.querySelector('.maincomments');
    chats.scrollTop = chats.scrollHeight;
})

window.addEventListener('load', () => {
    let chats = document.querySelector('.maincomments');
    chats.scrollTop = chats.scrollHeight;
});
function splitFirstColon(inputString) {
    let parts = inputString.split(':');
    let beforeColon = parts[0];
    let afterColon = parts.slice(1).join(':');
    return {
        beforeColon: beforeColon,
        afterColon: afterColon
    };
}

document.addEventListener('DOMContentLoaded', () => {
    main_count+=2;
    function fetchCount() {
        const fileName = "comment.json";
        if (!fileName) return;
        fetch(`/line-count-comment?file=${fileName}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error(data.error);
                    return;
                }
                let newCount = data.count;
                if (newCount > main_count) {
                    fetchSecondLastLine();
                    main_count = newCount;
                }
            })
            .catch(error => console.error('Error fetching line count:', error));
    }
    function fetchSecondLastLine() {
        currentuserid=sessionStorage.getItem("main_user_id");
        const fileName = "comment.json"
        if (!fileName) return;
        fetch(`/second-last-line-comment?file=${fileName}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error(data.error);
                    return;
                }
                let mes=data.second_last_line;
                let result = splitFirstColon(mes);
                key=result.beforeColon;
                value=result.afterColon;
                value = value.replace(/"/g, '');
                creatediv(value)
            })
            .catch(error => console.error('Error fetching second last line:', error));
    }
    setInterval(fetchCount, 1000); 
});
async function writeJsonTolike(filename, data) {
    try {
        const response = await fetch(`/writelike-json/${filename}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result.success) {
            let svgcolor=document.getElementById("likeimage");
            svgcolor.style.transition="2s ease-in-out";
            svgcolor.style.fill="darkred";
            svgcolor.style.height="1.5em";
            svgcolor.style.filter="drop-shadow(2px 4px 5px darkred)";
        } else {
            console.error('Error:', result.message);
        }
    } catch (error) {
        console.error('Error writing to JSON file:', error);
    }
}

async function fetchAndCountlike(filename) {
    try {
        const response = await fetch(`/readlike-json/${filename}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message);
        }
        const data = result.data;
        const entryCount = Object.keys(data).length;
        return entryCount;
    } catch (error) {
        console.error('Error fetching or counting JSON entries:', error);
        return 0;
    }
}
function likebtn(){
    likeCount();
}
async function likeCount() {
    let currentuserid=sessionStorage.getItem("main_user_id");
    let filename="likecount.json";
    try {
        const count = await fetchAndCountlike(filename);
        const completeuserid="user"+count+"_"+currentuserid;
        const value=count+1;  
        const data={
            [completeuserid]:value
        };
        let cout=0;
        Object.entries(global_variable).forEach(([key, value]) => {
            key=key.split('_')[1];
            if(key==currentuserid){
                cout+=1;
            }
        });
        if(cout==0){
            writeJsonTolike(filename, data);
        }
    } catch (error) {
        console.error('Error using entry count:', error);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let lastCount = 0;
    function fetchCount() {
        const fileName = "likecount.json";
        if (!fileName) return;
        fetch(`/line-count-like?file=${fileName}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error(data.error);
                    return;
                }
                let newCount = data.count;
                if (newCount > lastCount) {
                    fetchSecondLastLine();
                    lastCount = newCount;
                }
            })
            .catch(error => console.error('Error fetching line count:', error));
    }
    function fetchSecondLastLine() {
        currentuserid=sessionStorage.getItem("main_user_id");
        const fileName = "likecount.json"
        if (!fileName) return;
        fetch(`/second-last-line-like?file=${fileName}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error(data.error);
                    return;
                }
                let mes=data.second_last_line;
                Object.entries(global_variable).forEach(([key, value]) => {
                    key=key.split('_')[1];
                    if(key==currentuserid){
                        let svgcolor=document.getElementById("likeimage");
                        svgcolor.style.transition="1s ease-in-out";
                        svgcolor.style.fill="darkred";
                        svgcolor.style.height="1.5em";
                        svgcolor.style.filter="drop-shadow(2px 4px 5px darkred)";
                    }
                });
                    let result = splitFirstColon(mes);
                    let key =result.beforeColon;
                    value=result.afterColon;
                    key = key.replace(/"/g, '');
                    value = value.replace(/"/g, '');
                    global_variable[key]=value;
                    let spanvalue=document.getElementById("likecount");
                    spanvalue.innerHTML=value;
            })
            .catch(error => console.error('Error fetching second last line:', error));
    }
    setInterval(fetchCount, 1000); 
});