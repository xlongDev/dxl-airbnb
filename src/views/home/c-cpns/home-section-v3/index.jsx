import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'

const HomeSectionv3 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className="room-list">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemData={item} itemwidth="20%" key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="Plus"/>
    </SectionV3Wrapper>
  )
})

HomeSectionv3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionv3