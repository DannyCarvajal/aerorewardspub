import { usePoints } from "points/pointsContext";

import { reedemProduct } from "services/postData";

const useProductLogic = ({ setIsRedeemed, _id }) => {
	const [, reloadPoints] = usePoints();

	const cancelRedeem = () => setIsRedeemed(false);

	const completeRedeem = () => {
		reedemProduct(_id)
			.then(_ => {
				reloadPoints();
				setIsRedeemed(true);
				setTimeout(() => setIsRedeemed(false), 4000);
			})
			.catch(err => {
				setIsRedeemed("ERROR");
				setTimeout(() => setIsRedeemed(false), 4000);
				console.error(err);
			});
	};

	return { cancelRedeem, completeRedeem };
};

export default useProductLogic;
