
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { OnboardingDialog } from '@/components/game/OnboardingDialog';
import { useSound } from '@/hooks/use-sound';
import { Timer, Bomb, ShieldAlert, Skull, Glasses, Shuffle } from 'lucide-react';
import { StepHeader } from '@/components/layout/StepHeader';
import { SelectionCard } from '@/components/game/SelectionCard';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const router = useRouter();
  const { playButtonSound } = useSound();

  const handleSelectMode = (gameMode: string) => {
    playButtonSound();
    router.push(`/settings/grid?gameMode=${gameMode}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-2 sm:p-4">
      <OnboardingDialog />
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center flex-grow px-4">
        <Header />
        <main className="w-full flex flex-col items-center mt-8">
          <StepHeader title="Choose a Game Mode" step={1} totalSteps={5} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
            <SelectionCard
              Icon={Timer}
              title="Classic"
              description="Find all pairs with no time limit. Focus and relax!"
              onClick={() => handleSelectMode('classic')}
            />
            <SelectionCard
              Icon={Bomb}
              title="Time Attack"
              description="Race against the clock to match all the pairs."
              onClick={() => handleSelectMode('time-attack')}
            />
            <SelectionCard
              Icon={ShieldAlert}
              title="Minefield"
              description="Some pairs are mines. Find the match before it's too late!"
              onClick={() => handleSelectMode('minefield')}
            />
             <SelectionCard
              Icon={Skull}
              title="Sudden Death"
              description="One wrong move and the game is over. Ultimate focus!"
              onClick={() => handleSelectMode('sudden-death')}
            />
            <SelectionCard
              Icon={Glasses}
              title="Peekaboo"
              description="Memorize the board at the start, then find the pairs."
              onClick={() => handleSelectMode('peekaboo')}
            />
            <SelectionCard
              Icon={Shuffle}
              title="Scramble"
              description="Unmatched cards shuffle their positions periodically. Stay sharp!"
              onClick={() => handleSelectMode('scramble')}
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
