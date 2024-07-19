function back(){
    sessionStorage.setItem("current_user_id","");
    sessionStorage.setItem("current_user_name","");
    window.history.back();
}

function create_div(isReceived) {
    let message_dev = document.getElementById('main_message');
    let div = document.createElement('div');
    if (isReceived) {
        div.classList.add('received');
    } else {
        div.classList.add('sent');
    }
    div.classList.add('message');
    message_dev.appendChild(div);
    return div;
}
screenshare.onclick = async () => {
    let a = document.getElementById("main_message");
    let b = document.getElementById("screen");
    b.style.display = "block";
    
    try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        const video = document.createElement("video");
        video.srcObject = screenStream;
        video.style.width = "100%";
        video.style.height = "100%";
        b.appendChild(video);
        video.play();

        screenStream.getVideoTracks()[0].addEventListener('ended', () => {
            b.style.display = "none";
        });

        function mid() {
            if (b.style.display === "none") {
                b.style.display = "none";
                a.style.display = "block";
            } else {
                b.style.width = "100%";
                b.style.height = "auto";
            }
        }

        setInterval(mid, 1000);
    } catch (err) {
        console.error("Error: " + err);
    }
}
let extensions = [
    ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg",
    ".mp4", ".mov", ".avi", ".mkv", ".wmv", ".flv", ".webm",
    ".mp3", ".wav", ".ogg", ".aac", ".flac", ".wma",
    ".txt", ".rtf", ".doc", ".docx", ".odt", ".pdf",
    ".xls", ".xlsx", ".ods",
    ".ppt", ".pptx", ".odp",
    ".csv", ".xml", ".json",
    ".zip", ".rar", ".tar", ".gz", ".7z",
    ".html", ".css", ".js", ".py", ".java", ".cpp", ".php", ".rb", ".swift", ".c",
    ".exe", ".msi", ".dmg", ".app",
    ".apk",
    ".deb", ".rpm",
    ".torrent",
    ".ics",
    ".vcf",
    ".key"
];
function isTextFile(extension) {
    const textExtensions = [".txt", ".rtf", ".doc", ".docx", ".odt", ".pdf", ".html", ".css", ".js", ".py", ".java", ".cpp", ".php", ".rb", ".swift", ".c"];
    return textExtensions.includes(extension);
}
async function handleTextFile(currentuserid,key,filename) {
    try {
        const response = await fetch(`/read_file/${filename}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const text = await response.text();
        if(key!=currentuserid){
            let receive_div = create_div(true);
            receive_div.innerHTML = text;
        }
        else{
            let sent_div = create_div(false);
            sent_div.innerHTML  = text;
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function handleImageFile(currentuserid,key,filename) {
    const imgElement = document.createElement('img');
    imgElement.src = `/read_file/${filename}`;
    imgElement.width="100%";
    imgElement.height="100%";
    if(key!=currentuserid){
        let receive_div = create_div(true);
        receive_div.innerHTML = '';
        receive_div.style.background="none";
        receive_div.appendChild(imgElement);
    }
    else{
        let sent_div = create_div(false);
        sent_div.innerHTML  = '';
        sent_div.style.background="none";
        sent_div.appendChild(imgElement);
    }
}
async function handleVideoFile(currentuserid,key,filename) {
    const videoElement = document.createElement('video');
    videoElement.src = `/read_file/${filename}`;
    videoElement.controls = true;
    videoElement.width="100%";
    videoElement.height="100%";
    if(key!=currentuserid){
        let receive_div = create_div(true);
        receive_div.innerHTML = '';
        receive_div.style.background="none";
        receive_div.appendChild(videoElement);;
    }
    else{
        let sent_div = create_div(false);
        sent_div.innerHTML  = '';
        sent_div.style.background="none";
        sent_div.appendChild(videoElement);;
    }
}
async function handleAudioFile(currentuserid,key,filename) {
    const audioElement = document.createElement('audio');
    audioElement.src = `/read_file/${filename}`;
    audioElement.controls = true;
    audioElement.width="100%";
    audioElement.height="100%";
    if(key!=currentuserid){
        let receive_div = create_div(true);
        receive_div.innerHTML = '';
        receive_div.style.background="none";
        receive_div.appendChild(audioElement);
    }
    else{
        let sent_div = create_div(false);
        sent_div.innerHTML  = '';
        sent_div.style.background="none";
        sent_div.appendChild(audioElement);
    }
}
async function loadFile(key,filename) {
    const extension = filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2).toLowerCase();
    let currentuserid = sessionStorage.getItem("current_user_id");
    if (extensions.includes("." + extension)) {
        // if (isTextFile("." + extension)) {
        //     await handleTextFile(currentuserid,key,filename);
        // }
        if ([".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"].includes("." + extension)) {
            await handleImageFile(currentuserid,key,filename);
        } else if ([".mp4", ".mov", ".avi", ".mkv", ".wmv", ".flv", ".webm"].includes("." + extension)) {
            await handleVideoFile(currentuserid,key,filename);
        } else if ([".mp3", ".wav", ".ogg", ".aac", ".flac", ".wma"].includes("." + extension)) {
            await handleAudioFile(currentuserid,key,filename);
        } else {
            if(key!=currentuserid){
                let receive_div = create_div(true);
                receive_div.innerHTML = 'File type not supported for display.';
            }
            else{
                let sent_div = create_div(false);
                sent_div.innerHTML = 'File type not supported for display.';
            }
        }
    } else {
        if(key!=currentuserid){
            let receive_div = create_div(true);
            receive_div.innerHTML = 'Unsupported file type.';
        }
        else{
            let sent_div = create_div(false);
            sent_div.innerHTML = 'Unsupported file type.';
        }
    }
}
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
        const fileName = sessionStorage.getItem("filepath");
        if (!fileName) return;
        fetch(`/line-count?file=${fileName}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error(data.error);
                    return;
                }
                let newCount = data.count;
                if (newCount > main_count) {
                    fetchSecondLastLine();
                    main_count= newCount;
                }
            })
            .catch(error => console.error('Error fetching line count:', error));
    }
    function fetchSecondLastLine() {
        currentuserid=sessionStorage.getItem("current_user_id");
        const fileName = sessionStorage.getItem('filepath');
        if (!fileName) return;
        fetch(`/second-last-line?file=${fileName}`)
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
                key = key.replace(/"/g, '');
                value = value.replace(/"/g, '');
                let ccount=currentuserid.length;
                if(key.slice(-(ccount))!=currentuserid){
                    let containsExtension = extensions.some(extension => value.includes(extension));
                    if (containsExtension) {
                        value=value.trim()
                        loadFile(key.slice(-(ccount)),value);
                    } else {
                        let receive_div = create_div(true);
                        receive_div.innerHTML = value;
                    }
                }
                else{
                    let containsExtensio = extensions.some(extension => value.includes(extension));
                    if (containsExtensio) {
                        value=value.trim()
                        loadFile(key.slice(-(ccount)),value);
                    } else {
                        let sent_div = create_div(false);
                        sent_div.innerHTML = value;
                    }
                }
            })
            .catch(error => console.error('Error fetching second last line:', error));
    }
    setInterval(fetchCount, 1000); 
});


async function writeJsonToFile(filename, data) {
    try {
        const response = await fetch(`/write-json/${filename}`, {
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
            console.log('');
        } else {
            console.error('Error:', result.message);
        }
    } catch (error) {
        console.error('Error writing to JSON file:', error);
    }
}

async function fetchAndCountJsonEntries(filename) {
    try {
        const response = await fetch(`/read-json/${filename}`);
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

async function useEntryCount(filename,currentuserid,usemessage) {
    try {
        const count = await fetchAndCountJsonEntries(filename);
        const completeuserid="user"+count+currentuserid;
        const data={
            [completeuserid]:usemessage
        };
        writeJsonToFile(filename, data);
    } catch (error) {
        console.error('Error using entry count:', error);
    }
}
function message(){
    let usemessage=document.getElementById("message-input").value;
    let currentuserid=sessionStorage.getItem("current_user_id");
    let filename=sessionStorage.getItem("filepath");
    useEntryCount(filename,currentuserid,usemessage);
    let um=document.getElementById("message-input");
    um.value="";

}
let main_count=0;
async function fetchAndIterateJson(filename) {
    let currentuserid = sessionStorage.getItem("current_user_id");
    try {
        const url = `/log_file/${filename}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        Object.entries(data).forEach(([key, value]) => {
            let ccount=currentuserid.length;
            main_count+=1;
            if(key.slice(-(ccount))!=currentuserid){
                let containsExtension = extensions.some(extension => value.includes(extension));
                if (containsExtension) {
                    loadFile(key.slice(-(ccount)),value);
                } else {
                    let receive_div = create_div(true);
                    receive_div.innerHTML = value;
                }
            }
            else{
                let containsExtensio = extensions.some(extension => value.includes(extension));
                if (containsExtensio) {
                    loadFile(key.slice(-(ccount)),value);
                } else {
                    let sent_div = create_div(false);
                    sent_div.innerHTML = value;
                }
            }
        });
    } catch (error) {
        console.error('Error fetching or iterating over JSON data:', error);
    }
}

async function checkFileExists(filename) {
    try {
        const response = await fetch(`/check-file/${filename}`);
        const data = await response.json();
        
        if (data.exists) {
            return true; 
        } else {
            return false; 
        }
    } catch (error) {
        console.error('Error checking file existence:', error);
        return false; 
    }
}
async function createEmptyJsonFile(filename) {
    try {
        const response = await fetch(`/create-empty-file/${filename}`, {
            method: 'POST',
        });
        const data = await response.json();
        if (data.success) {
            console.log('');
        } else {
            console.error('Error creating file:', data.message);
        }
    } catch (error) {
        console.error('Error creating file:', error);
    }
}
async function checkFilesSequentially(file1, file2) {
    const file1Exists = await checkFileExists(file1);
    if (file1Exists) {
        sessionStorage.setItem("filepath",file1);
        fetchAndIterateJson(file1); 
    } else {
        const file2Exists = await checkFileExists(file2);
        if (file2Exists) {
            sessionStorage.setItem("filepath",file2);
            fetchAndIterateJson(file2); 
        } else {
            await createEmptyJsonFile(file1);
            sessionStorage.setItem("filepath",file1);
        }
    }
}
function main(){
    let image=document.getElementById("img");
    let name=document.getElementById("h2");
    let fetchimage=sessionStorage.getItem("current_user_image");
    let fetchname=sessionStorage.getItem("current_user_name");
    image.src=fetchimage;
    name.innerHTML=fetchname;
    let currentuserid = sessionStorage.getItem("current_user_id");
    let currentusername = sessionStorage.getItem("current_user_name");
    let main_user_name=sessionStorage.getItem("main_user_name");
    let main_user_id=sessionStorage.getItem("main_user_id");
    currentusername=currentusername.replace(/\s+/g, '');
    main_user_name=main_user_name.replace(/\s+/g, '');
    let currentuser=currentusername.trim()+currentuserid.trim()
    let mainuser=main_user_name.trim()+main_user_id.trim()
    list1=[currentuser,mainuser]
    filepath1=list1[0].trim()+list1[1].trim()+".json";
    filepath2=list1[1].trim()+list1[0].trim()+".json";
    checkFilesSequentially(filepath1, filepath2);
}
main();
let sub=document.getElementById("send-button");
sub.addEventListener("click", () => {
    let chats = document.querySelector('.chat-messages');
    chats.scrollTop = chats.scrollHeight;
})

window.addEventListener('load', () => {
    let chats = document.querySelector('.chat-messages');
    chats.scrollTop = chats.scrollHeight;
});
let scre=document.getElementById("screenshare");
scre.addEventListener("click", () => {
    let chats = document.querySelector('.chat-messages');
    chats.scrollTop = chats.scrollHeight;
})
document.getElementById('file').addEventListener('change', function() {
    uploadFiles();
});
function uploadFiles() {
    const formData = new FormData();
    const fileInput = document.getElementById('file');
    for (const file of fileInput.files) {
        formData.append('files', file);
    }
    let currentuserid=sessionStorage.getItem("current_user_id");
    let filename=sessionStorage.getItem("filepath");
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        for (const file of data.uploaded_files) {
            useEntryCount(filename,currentuserid,file.name);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

