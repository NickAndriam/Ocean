import * as type from '../types'

const setAnimation = ({ openLbar, openRBar, openNCTab }) => {
    type: type.OPEN_LBAR,
        openLbar,
        openRBar,
        openNCTab
}

export default setAnimation