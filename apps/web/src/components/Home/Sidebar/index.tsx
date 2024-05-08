import type { FC } from 'react';

import SignupCard from '@components/Shared/Auth/SignupCard';
import Footer from '@components/Shared/Footer';
import { Ad } from '@targecy/sdk';
import { memo } from 'react';
import { useProfileStore } from 'src/store/persisted/useProfileStore';
import { zeroAddress } from 'viem';

import EnableLensManager from './EnableLensManager';
import RunAds from './RunAds';
import SetProfile from './SetProfile';
import StaffPicks from './StaffPicks';
import WhoToFollow from './WhoToFollow';

const Sidebar: FC = () => {
  const { currentProfile } = useProfileStore();
  const loggedInWithProfile = Boolean(currentProfile);
  const loggedOut = !loggedInWithProfile;

  return (
    <>
      <div className="mb-7">
        <Ad
          isDemo={true}
          publisher={zeroAddress}
          styling={{
            backgroundColor: 'rgb(61 97 77 / 0.1)',
            border: '1px solid rgb(61 97 77)',
            subtitleColor: 'rgb(61 97 77)',
            titleColor: 'rgb(61 97 77)'
          }}
        />
      </div>
      <RunAds />
      {loggedOut && <SignupCard />}
      {/* {loggedInWithProfile && <HeyMembershipNft />} */}
      {/* Onboarding steps */}
      {loggedInWithProfile && (
        <>
          <EnableLensManager />
          <SetProfile />
        </>
      )}
      {/* Recommendations */}
      <StaffPicks />
      {loggedInWithProfile && <WhoToFollow />}
      <Footer />
    </>
  );
};

export default memo(Sidebar);
