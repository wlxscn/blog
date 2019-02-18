import React, { Component } from 'react'

/** 
 * props参数列表
 * data 列表数据
 * renderItem  列表每一项dom
*/
class List extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='list-wrap'>
        {
          this.props.data.map((item, index) => {
            return this.props.renderItem(item, index)
          })
        }
      </div>
    )
  }
}

export default List