import { useEffect, useState } from "react";


const useMenuItems = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('/menuItem.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, []);
    return [menus, setMenus]
}
export default useMenuItems;