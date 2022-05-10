import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return <div className='header'>
        <Link style={{ margin: 'auto 5px'}} to="/">首页</Link>
        <Link style={{ margin: 'auto 5px'}} to="/posts">文章</Link>
        <Link style={{ margin: 'auto 5px'}} to="/about">关于</Link>
    </div>
}