
const fetchdata= async()=>{
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.8313795&lng=91.2845146&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    // setList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
};