import { useEffect, useState } from "react"

function Items() {
    const [list, setList] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        setFilteredList(list)
        if(list.length === 0) {
            const item1 = {
                title: "google",
                content: "/single-item/hello World",
                category: "search"
            }
            const item2 = {
                title: "w3schools",
                content: "https://www.w3schools.com",
                category: "learn"
            }
            const item3 = {
                title: "openai",
                content: "https://openai.com",
                category: "learn"
            }
    
            setList([item1, item2, item3])
            setFilteredList([item1, item2, item3])
        }

        let filtered = list;
        if (selectedCategory !== 'all') {
            filtered = list.filter(item => item.category === selectedCategory);
        }
        if(searchTerm !== "") {
            filtered = filtered.filter((item) => 
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }
        setFilteredList(filtered)
        
    }, [searchTerm, list, selectedCategory])

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}></input>
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="learn">Learn</option>
                    <option value="search">Search</option>
                </select>
            </div>
            {
                filteredList.map((item, index) => 
                    <li key={index}>
                        <a href={item.content}>{item.title}</a>
                    </li>
                )
            }
        </div>
    )
}
export default Items