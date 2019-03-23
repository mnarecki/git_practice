const apiKey = 'GmldpFKtbdO3zNCV1x_s2PokFc7la0B6iDP-phyJHMTyyupV_WyDlFfCOfGJLcg3gJVNfCHxx3sfkEWSqsSNkfQgxvfJFs8UbltdYTph84OEx6NzAHrpXLgrwwyWXHYx';

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
    {headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(response => {
    return response.json();
  }).then(jsonResponse => {
    if (jsonResponse.businesses){
      //console.log(jsonResponse.businesses);
      return jsonResponse.businesses.map(business => {
        //console.log(business);
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        };
      });
    }
  })
}
};
export default Yelp;