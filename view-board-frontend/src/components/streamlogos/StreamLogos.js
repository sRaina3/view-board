import './StreamLogos.css'

const StreamLogos = ({name, showAll}) => {
  let imgs = [
    {key: 'ALL4', url: 'https://seeklogo.com/images/C/Channel_4-logo-ADE347836C-seeklogo.com.png'},
    {key: 'APPLE', url: 'https://images.justwatch.com/icon/190848813/s100/icon.webp'},
    {key: 'BRITBOX', url: 'https://media.wired.co.uk/photos/606d9f697aff197af7c72c90/1:1/w_1999,h_1999,c_limit/britbox.jpg'},
    {key: 'CRAVE', url: 'https://exclaim.ca/images/cravve_2.png'},
    {key: 'CURIOSITY', url: 'https://images.justwatch.com/icon/48600036/s100/icon.webp'},
    {key: 'DISNEY', url: 'https://images.justwatch.com/icon/147638351/s100/icon.webp'},
    {key: 'HBO', url: 'https://images.justwatch.com/icon/305458112/s100/icon.webp'},
    {key: 'HOTSTAR', url: 'https://www.indiantelevision.com/sites/default/files/images/tv-images/2020/03/09/hotstar.jpg'},
    {key: 'HULU', url: 'https://images.justwatch.com/icon/116305230/s100/icon.webp'},
    {key: 'IPLAYER', url: 'https://pbs.twimg.com/profile_images/1450745962016686085/PFHb1vtn_400x400.jpg'},
    {key: 'MUBI', url: 'https://images.justwatch.com/icon/164970114/s100/icon.webp'},
    {key: 'NETFLIX', url: 'https://images.justwatch.com/icon/207360008/s100/icon.webp'},
    {key: 'NOW', url: 'https://hips.hearstapps.com/goodhousekeeping-uk/main/embedded/29063/now-tv-0-.jpg'},
    {key: 'PARAMOUNT', url: 'https://images.justwatch.com/icon/242706661/s100/icon.webp'},
    {key: 'PEACOCK', url: 'https://images.justwatch.com/icon/194173871/s100/icon.webp'},
    {key: 'PRIME', url: 'https://images.justwatch.com/icon/52449539/s100/icon.webp'},
    {key: 'SHOWTIME', url: 'https://i0.wp.com/twincitiesfrugalmom.com/wp-content/uploads/2022/11/showtime-logo.jpg?ssl=1'},
    {key: 'STAN', url: 'https://www.stan.com.au/logo-square.png'},
    {key: 'STARZ', url: 'https://pbs.twimg.com/profile_images/1631466104102191106/mj0aFDgA_400x400.jpg'},
    {key: 'WOW', url: 'https://images.justwatch.com/icon/243229654/s100/icon.webp'},
  ]

  if (showAll) {
    return (
      <div className="image-column"> 
        {imgs.map(img => <div key={img.key}> <img src={img.url} alt="service"/> </div>)}
      </div>
    )
  }
  imgs.push({key: 'ZEE5', url: 'https://m.media-amazon.com/images/I/51CNksbNcfL.png'})
  const pos = imgs.find(img => img.key === name)
  return (
    <div>
      <img src={pos.url} alt="service"/>
    </div>
  )
}

export default StreamLogos