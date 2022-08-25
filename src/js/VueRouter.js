import {useRouter} from 'vue-router'
function main(){
    const router = useRouter()
    function toSection(name){
        router.push(`${name}`)
    }

    return {toSection}
}

export default main