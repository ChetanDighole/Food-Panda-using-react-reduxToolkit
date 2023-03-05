function searchResult(inputText , bigRestaurantData) {
    const filteredArray = bigRestaurantData.filter((element) => 
        element.data?.name?.toLowerCase().includes(inputText.toLowerCase())
    )
    return filteredArray
}

export default searchResult