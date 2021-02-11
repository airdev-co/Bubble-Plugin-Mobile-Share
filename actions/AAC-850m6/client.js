function(properties, context) {
	try {
    navigator.share({
      title: document.title,
      text: properties.text,
      url: properties.url
    });
    }
    catch (e) {
        console.log(e);
    }

}