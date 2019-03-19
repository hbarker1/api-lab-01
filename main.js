$(() => {
    $.get("https://www.reddit.com/r/aww/.json", (resolveData) => {
    
    $.each(resolveData.data.children, (i) => {
        console.log(resolveData.data.children[i].data.title);
        console.log(resolveData.data.children[i].data.thumbnail);
        console.log(resolveData.data.children[i].data.url);
 

       $('.posts').append(`<img src="${resolveData.data.thumbnail}"/>`)
       
    //    <img src="thumnail"></img>
    //    <div id="title">
    //    "title"</div>
    //    <div id="link">Link: "url"</div>`);

        return i < 10;
    });

    
    });

});