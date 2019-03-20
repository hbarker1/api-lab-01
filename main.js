$(() => {
    $.get("https://www.reddit.com/r/aww/.json", (resolveData) => {

        let title;
        let img;
    $.each(resolveData.data.children, (i) => {
        title = (resolveData.data.children[i].data.title);
        img = (resolveData.data.children[i].data.thumbnail);
        url = (resolveData.data.children[i].data.url);
 

        $('.container').append(`<img src="${img}"></img><br><div id="title-container">${title}</div><br><div id="link-container">Link: ${url}</div><br>`);
    //    <img src="thumnail"></img>
    //    <div id="title">
    //    "title"</div>
    //    <div id="link">Link: "url"</div>`);

        return i < 10;
    });

    
    });

});

