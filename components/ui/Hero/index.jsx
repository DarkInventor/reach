import { useRouter } from 'next/router';
import GradientWrapper from '../../GradientWrapper';
import NavLink from '../NavLink';

const Hero = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    // Redirect the user to the provided URL
    window.location.href =
      'https://checkout.stripe.com/c/pay/cs_live_a1oYas6WOoVDpX6vejGAuoeoYYYbempqkg6jCLv43vL2ZQERjS1ia1IdJ7#fidkdWxOYHwnPyd1blppbHNgWjA0S1NoVGpANX1vdWtXNkNDUDBgbzRjZmZBdmtBRE03VDc1SXdod0JtPV09QkZRVnBANWJEND1QV3JXYmNsNEdANG1CbzJwUFBBREhhNlR0UGZocnZsdHd%2FNTViRjZrNHBIaCcpJ3VpbGtuQH11anZgYUxhJz8nPXJIPEBBPExDYEpPZk9CNDExJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnErZmoqJ3gl';
  };

  return (
    <section>
      <GradientWrapper wrapperClassName="inset-0" className="custom-screen text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            The fastest way to Increase your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">
              website traffic
            </span>
          </h1>
          <p className="max-w-xl mx-auto">
            The ultimate way to get more website traffic and grow your online business. Increase the traffic of your site
            now.
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <NavLink
              href="/"
              className="flex items-center gap-x-2 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
              onClick={handleGetStartedClick}
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
            <NavLink href="#cta" className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900" scroll={false}>
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </GradientWrapper>
    </section>
  );
};

export default Hero;
