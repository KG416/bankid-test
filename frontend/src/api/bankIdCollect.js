import bankIdFetch from "./bankIdFetch"
import hintCodeToUserMessage from "../utils/hintCodeToUserMessage"

const bankIdCollect = async (orderRef, setUserMessage) => {
    console.log(`Started order with orderRef ${orderRef}`)

    // eslint-disable-next-line no-constant-condition
    while (true) {
        try {
            const { status, hintCode } = await bankIdFetch('collect', { orderRef })
            console.log('status:', status, 'hintCode:', hintCode)
            setUserMessage(hintCodeToUserMessage(hintCode))

            if (status === 'failed') return { ok: false, status, hintCode }
            if (status === 'complete') return { ok: true, status }
        } catch {
            console.log('Order expired, collect stopped')
            return { ok: false }
        }

        await new Promise(resolve => setTimeout(resolve, 2000))
    }
}

export default bankIdCollect