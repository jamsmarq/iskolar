import * as React from "react"
import { View } from "react-native"
import Svg, { SvgProps, Rect } from "react-native-svg"

interface ProcessBeansProps {
  position: number
}

const BeanInactive = (props: SvgProps) => (
  <Svg width={10} height={8} fill="none" {...props}>
    <Rect width={10} height={8} fill="#A5A5A5" rx={4} />
  </Svg>
)

const BeanActive = (props: SvgProps) => (
  <Svg width={16} height={8} fill="none" {...props}>
    <Rect width={16} height={8} fill="#1E1E1E" rx={4} />
  </Svg>
)

const ProcessBeans: React.FC<ProcessBeansProps> = ({ position }) => {

  const beanPositions = {
    1: [BeanActive, BeanInactive, BeanInactive],
    2: [BeanInactive, BeanActive, BeanInactive],
    3: [BeanInactive, BeanInactive, BeanActive]
  }[position]

  const beanPosition = beanPositions || [BeanInactive, BeanInactive, BeanInactive]

  return (
    < View style={{ flexDirection: 'row', columnGap: 4 }
    }>
      {beanPosition.map((BeanComponent, index) => (
        <BeanComponent key={index} />
      ))}
    </View >
  )
}

export default ProcessBeans