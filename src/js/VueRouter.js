import {useRouter} from 'vue-router'
function main(){
    const router = useRouter()
    function toSection(name){
        name=name.toLowerCase()
        router.push(`${name}`)
    }

    return {toSection}
}

export default main