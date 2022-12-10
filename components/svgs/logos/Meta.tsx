import { FC, SVGAttributes } from 'react'

const Meta: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg
			width={64}
			height={13}
			viewBox='0 0 64 13'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M2.27517 8.35938C2.27517 9.07062 2.43613 9.61668 2.64652 9.94704C2.92236 10.3797 3.33379 10.5631 3.75323 10.5631C4.29422 10.5631 4.78913 10.4329 5.74289 9.15353C6.50697 8.12813 7.40729 6.6888 8.01307 5.78648L9.03896 4.25776C9.75161 3.19608 10.5765 2.01587 11.5222 1.21588C12.2943 0.562941 13.1272 0.200195 13.9654 0.200195C15.3726 0.200195 16.7131 0.99111 17.739 2.47448C18.8617 4.09906 19.4067 6.14533 19.4067 8.25703C19.4067 9.51239 19.1516 10.4348 18.7175 11.1635C18.298 11.8683 17.4805 12.5724 16.1053 12.5724V10.5631C17.2828 10.5631 17.5767 9.51368 17.5767 8.31274C17.5767 6.60136 17.1653 4.70213 16.2589 3.34507C15.6157 2.3825 14.7822 1.79433 13.8652 1.79433C12.8734 1.79433 12.0752 2.51982 11.1782 3.8134C10.7014 4.50067 10.2118 5.33823 9.66211 6.28331L9.057 7.32296C7.84142 9.41328 7.53352 9.88939 6.92574 10.6751C5.86044 12.051 4.95077 12.5724 3.75323 12.5724C2.33261 12.5724 1.43429 11.9758 0.877931 11.0767C0.423761 10.3441 0.200684 9.38284 0.200684 8.28748L2.27517 8.35938Z' />
			<path d='M1.83643 2.61634C2.78751 1.19451 4.16004 0.200195 5.73427 0.200195C6.64595 0.200195 7.55229 0.46189 8.49869 1.21135C9.53393 2.03076 10.6373 3.38005 12.0138 5.60381L12.5074 6.40185C13.6989 8.32699 14.3769 9.31741 14.7736 9.78445C15.2839 10.3843 15.6412 10.5631 16.1054 10.5631C17.2829 10.5631 17.5767 9.51368 17.5767 8.31274L19.4068 8.25703C19.4068 9.51239 19.1516 10.4348 18.7175 11.1635C18.2981 11.8683 17.4806 12.5724 16.1054 12.5724C15.2505 12.5724 14.4931 12.3923 13.6555 11.626C13.0117 11.0379 12.259 9.99303 11.6799 9.05377L9.95738 6.26323C9.09312 4.86277 8.30033 3.81858 7.84148 3.34572C7.34791 2.83723 6.71341 2.22315 5.70088 2.22315C4.88137 2.22315 4.18542 2.78087 3.60301 3.63397L1.83643 2.61634Z' />
			<path d='M5.70081 2.22315C4.8813 2.22315 4.18536 2.78087 3.60295 3.63397C2.77943 4.83945 2.27517 6.63504 2.27517 8.35938C2.27517 9.07062 2.43613 9.61668 2.64652 9.94704L0.877931 11.0767C0.423761 10.3441 0.200684 9.38284 0.200684 8.28748C0.200684 6.29562 0.764389 4.21954 1.83636 2.61634C2.78745 1.19451 4.15998 0.200195 5.73421 0.200195L5.70081 2.22315Z' />
			<path d='M23.4399 0.591309H25.8397L29.9199 7.75035L34.0007 0.591309H36.3484V12.3546H34.3908V3.33911L30.8122 9.58221H28.9755L25.3975 3.33911V12.3546H23.4399V0.591309ZM42.4823 4.97729C41.0784 4.97729 40.2329 6.00205 40.0305 7.27101H44.7953C44.6971 5.96383 43.9197 4.97729 42.4823 4.97729ZM38.0896 7.99391C38.0896 5.32384 39.8689 3.38056 42.5164 3.38056C45.1205 3.38056 46.6754 5.29923 46.6754 8.13641V8.65786H40.0305C40.2663 10.0382 41.2107 10.9684 42.7335 10.9684C43.9484 10.9684 44.7078 10.6089 45.4278 9.95144L46.4677 11.1867C45.4879 12.0605 44.2416 12.5645 42.664 12.5645C39.7981 12.5645 38.0896 10.5377 38.0896 7.99391ZM49.0491 5.14571H47.2471V3.59108H49.0491V1.02013H50.9379V3.59108H53.6756V5.14571H50.9379V9.08603C50.9379 10.4314 51.3814 10.9095 52.4714 10.9095C52.969 10.9095 53.2542 10.868 53.6756 10.8V12.3378C53.1507 12.4816 52.6497 12.5477 52.1074 12.5477C50.0683 12.5477 49.0491 11.4672 49.0491 9.30433V5.14571ZM61.6289 6.65758C61.2496 5.72869 60.4034 5.04466 59.1597 5.04466C57.5434 5.04466 56.5089 6.15686 56.5089 7.96864C56.5089 9.73509 57.4613 10.9011 59.0823 10.9011C60.3566 10.9011 61.2663 10.182 61.6289 9.28748V6.65758ZM63.5178 12.3546H61.6637V11.1278C61.1454 11.85 60.2023 12.5645 58.6748 12.5645C56.2183 12.5645 54.5766 10.57 54.5766 7.96864C54.5766 5.34263 56.2577 3.38056 58.779 3.38056C60.0253 3.38056 61.0031 3.86379 61.6637 4.71689V3.59108H63.5178V12.3546Z' />
		</svg>
	)
}

export default Meta