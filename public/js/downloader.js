const downloadsong=(songlink,songname)=>
{
        function downloadFile(url, fileName) {
            var link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        function createFileFromUrl(url, fileName) {
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const createdfile = new File([blob], fileName);
                    // Use the file object as needed
                    console.log(createdfile);
                    let link = URL.createObjectURL(createdfile);
                    console.log(link)
                    let fileUrl = link;
                    downloadFile(fileUrl, fileName);
                })
                .catch(error => {
                    console.error('Error creating file:', error);
                });
        }

        // Example usage
        // var fileUrl = 'https://aac.saavncdn.com/371/4715fb389008f164e355a99dffa24a46_12.mp4';
        let fileUrl = songlink;
        let fileName = `${songname}.mp3`;
        createFileFromUrl(fileUrl, fileName);
}
