import SocialBtn from './SocialBtn'

const colors = [
  '#161F35',
  '#2E384E',
  '#4D566D',
  '#6C768C',
  '#7F899F',
  '#8A95AA',
  '#9CA5BB',
  '#BCC6DC',
]

const icons = [
  'youtube',
  'discord',
  'linkedin',
  'github',
  'instagram',
  'facebook',
  'twitter',
  'reddit',
]

function Social() {
  return (
    <div className="w-screen h-auto grid grid-cols-8">
      {colors.map((color, ind) => (
        <SocialBtn
          key={ind}
          icon={icons[ind]}
          background={color}
          text={icons[ind][0].toUpperCase() + icons[ind].slice(1)}
        />
      ))}
    </div>
  )
}

export default Social
