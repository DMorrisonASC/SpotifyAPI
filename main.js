fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: "Authorization: Bearer BQAhByOA4H0QYiMMPgnL73juH6rB9HJlAM8pbQl6mUUWWCCILh5IbuXQ1V_pIIIF81TpXUsZyM8oYtEimFMLnJsQO6I44BFY6DYk6jePLCAjXWz-iVthNkot2ZgS8DX-uyMaQ6XsdOLQZKJm6UeFW7ePncop90XP6y2wuvXPGb-eUsE"
    },
}).then(function (response) {
    return response.json();

    /* Find the urls
     * add the word embed/ 
     * and then find the iframe 
     * and change the src 
     */
})
    .then(function (myJson) {
        let playlistLength = myJson.items.length;
        // console.log(playlistLength);
        for (let i = 0; i < playlistLength; i++) {
            // console.log(myJson);
            // embedUrl = the link to original link to spotify playlist
            let embedUrl = myJson.items[i].external_urls.spotify;
            // creates part of original link
            const splitter = "https://open.spotify.com/"
            // split converts string into an array in order to decide where to place "embed/"
            let split = embedUrl.split(splitter)
            // console.log(split)
            split[0] = "embed/"
            // console.log(split);
            split.unshift(splitter)
            // console.log(split)
            // .join turn array back to string, ('') = not including any spaces 
            embedUrl = split.join('');
            // console.log(embedUrl)
            userData(embedUrl)

        }
    });


const userData = (data) => {
    divPlaylist = document.getElementById("divPlaylist")
    iframe = document.createElement("iframe")
    iframe.src = data;
    iframe.width = "300px";
    iframe.height = "380px";
    iframe.allow = "encrypted-media";
    iframe.allowTransparency = "true"
    divPlaylist.appendChild(iframe);



}