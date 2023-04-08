import React, { useState } from 'react'
import Search from '../components/Search'
import Loading from '../components/Loading'
import CardList from '../components/CardList'

function Home({ data, l, refresh, setRefresh }) {
    const [clear, setClear] = useState(true)
    const [search, setSearch] = useState('')
    return (
        <div>
            <Search setRefresh={setRefresh} refresh={refresh} setClear={setClear} clear={clear} setSearch={setSearch} />
            {!l && <Loading />}
            {clear && l && <CardList data={data} refresh={refresh} search={search} />}
        </div>
    )
}

export default Home