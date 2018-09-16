
import constants from '@/js/constants.js'
import { props } from '@/js/properties.js'

import CardContainer from './CardContainer'
import CardRegionItem from './CardRegionItem'
import CardElevationItem from './CardElevationItem'

export default {

    components: {
        CardContainer,
        CardRegionItem,
        CardElevationItem,
    },

    props: props.requiredDocument,

    methods:{
        go(){
            this.$router.push({
                name: constants.getDocumentType(this.document.type),
                params: { id: this.document.document_id }
            })
        }
    },
}