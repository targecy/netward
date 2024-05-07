import type { FC } from 'react';

import { Button, Card } from '@hey/ui';
import Link from 'next/link';

const RunAds: FC = () => {
  return (
    <Card
      as="aside"
      className="mb-4 space-y-4 !border-[#3D614D] !bg-[#3D614D]/10 p-5 font-serif text-[#3D614D] dark:bg-[#3D614D]/50"
    >
      <div className="space-y-3 text-center text-sm">
        <div className="">
          Did you know that you can run <b>personalized ads</b>, target your
          <b> ideal audience</b> on Netward and <b>gain exposure</b> for your
          posts?
        </div>
        <div>
          <Link
            className="font-bold underline"
            href="https://ads.netward.social"
            target="_blank"
          >
            <Button>Run Ads</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default RunAds;
