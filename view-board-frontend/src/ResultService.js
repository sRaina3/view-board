const ResultService = ({name}) => {
  const imgs = [
    {name: 'ALL4', url: ''},
    {name: 'APPLE', url: 'https://images.justwatch.com/icon/190848813/s100/icon.webp'},
    {name: 'BRITBOX', url: ''},
    {name: 'CRAVE', url: ''},
    {name: 'CURIOSITY', url: ''},
    {name: 'DISNEY', url: 'https://images.justwatch.com/icon/147638351/s100/icon.webp'},
    {name: 'HBO', url: 'https://images.justwatch.com/icon/305458112/s100/icon.webp'},
    {name: 'HOTSTAR', url: ''},
    {name: 'HULU', url: 'https://images.justwatch.com/icon/116305230/s100/icon.webp'},
    {name: 'IPLAYER', url: ''},
    {name: 'MUBI', url: ''},
    {name: 'NETFLIX', url: 'https://images.justwatch.com/icon/207360008/s100/icon.webp'},
    {name: 'NOW', url: ''},
    {name: 'PARAMOUNT', url: ''},
    {name: 'PEACOCK', url: 'https://images.justwatch.com/icon/194173871/s100/icon.webp'},
    {name: 'PRIME', url: 'https://images.justwatch.com/icon/52449539/s100/icon.webp'},
    {name: 'SHOWTIME', url: ''},
    {name: 'STAN', url: ''},
    {name: 'STARZ', url: ''},
    {name: 'WOW', url: ''},
    {name: 'ZEE5', url: ''}
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