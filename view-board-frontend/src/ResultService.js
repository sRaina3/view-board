import './ResultService.css'

const ResultService = ({name}) => {
  const imgs = [
    {name: 'ALL4', url: 'https://play-lh.googleusercontent.com/OOahZdnHEfVWUfWaVA_M01JdNyPSMv7umDjK2oeksFX-I_m8gSFaZPtEo7967FmkmK4'},
    {name: 'APPLE', url: 'https://images.justwatch.com/icon/190848813/s100/icon.webp'},
    {name: 'BRITBOX', url: 'https://play-lh.googleusercontent.com/IZmZF3X9QgCF26V6oYtpZDhnWdjbhg0idG7HSkdIV2PyumE80s0faHGkSMJe2MV4JCQ'},
    {name: 'CRAVE', url: 'https://play-lh.googleusercontent.com/X4c-IrRgJx1WAf2Zfr8T-HOYS6mbTrttCt8eJ9MJzRlr6AIFvky6sOruDkTst6Zz_Q'},
    {name: 'CURIOSITY', url: 'https://images.justwatch.com/icon/48600036/s100/icon.webp'},
    {name: 'DISNEY', url: 'https://images.justwatch.com/icon/147638351/s100/icon.webp'},
    {name: 'HBO', url: 'https://images.justwatch.com/icon/305458112/s100/icon.webp'},
    {name: 'HOTSTAR', url: 'https://www.indiantelevision.com/sites/default/files/images/tv-images/2020/03/09/hotstar.jpg'},
    {name: 'HULU', url: 'https://images.justwatch.com/icon/116305230/s100/icon.webp'},
    {name: 'IPLAYER', url: 'https://pbs.twimg.com/profile_images/1450745962016686085/PFHb1vtn_400x400.jpg'},
    {name: 'MUBI', url: 'https://images.justwatch.com/icon/164970114/s100/icon.webp'},
    {name: 'NETFLIX', url: 'https://images.justwatch.com/icon/207360008/s100/icon.webp'},
    {name: 'NOW', url: 'https://hips.hearstapps.com/goodhousekeeping-uk/main/embedded/29063/now-tv-0-.jpg'},
    {name: 'PARAMOUNT', url: 'https://images.justwatch.com/icon/242706661/s100/icon.webp'},
    {name: 'PEACOCK', url: 'https://images.justwatch.com/icon/194173871/s100/icon.webp'},
    {name: 'PRIME', url: 'https://images.justwatch.com/icon/52449539/s100/icon.webp'},
    {name: 'SHOWTIME', url: 'https://i0.wp.com/twincitiesfrugalmom.com/wp-content/uploads/2022/11/showtime-logo.jpg?ssl=1'},
    {name: 'STAN', url: 'https://play-lh.googleusercontent.com/r8Wd90rLnw22lgf8Xjtf-lPNfemQx8h4Ih6THAFnSiVskGtblXr5_ejpp6gTK_xuIw'},
    {name: 'STARZ', url: 'https://play-lh.googleusercontent.com/ZF0lnNTgrJqZ-WLubeF09m_gLt4IaL7189Wv0F6uwHmO7gJB3Om5bhanXdJci8FenNuS'},
    {name: 'WOW', url: 'https://play-lh.googleusercontent.com/7rfUwUR3VVMk-gdqzOkof97UzVOXfethEDsFcDVaLO3ukAZDiDd1XsOjKELpfvPlAYE=w240-h480-rw'},
    {name: 'ZEE5', url: 'https://m.media-amazon.com/images/I/51CNksbNcfL.png'}
  ]

  const pos = imgs.find(img => img.name === name)
  console.log(pos.name + '    ' + name)
  return (
    <div>
      <img src={pos.url} alt="service"/>
    </div>
  )
}

export default ResultService