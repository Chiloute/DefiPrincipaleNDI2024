'use client';

import React from 'react';
import HintItem from './HintItem';
import './HintPage.css';
import Image from 'next/image'

const HintPage = () => {
  
  return (
    <div className='HintTable'>
        <div className='left split'>
          <Image src="/terre.png" alt="une personne" width="400" height="400" />
          <HintItem
            x={35}
            y={18}
            generation={1}
            content="Blanchissement des coraux"
          />
          <HintItem
            x={55}
            y={25}
            generation={1}
            content="Expansion des zones mortes"
          />
          <HintItem
            x={48}
            y={30}
            generation={1}
            content="Perturbation des cycles de reproduction"
          />
          <HintItem
            x={42}
            y={4}
            generation={1}
            content="Fonte accrue des glaciers et calottes polaires"
          />
          <HintItem
            x={35}
            y={18}
            generation={2}
            intensity={2}
            content="Blanchissement massif des coraux"
          />
          <HintItem
            x={55}
            y={25}
            generation={2}
            content="Migration des espèces"
          />
          <HintItem
            x={48}
            y={40}
            generation={2}
            content="Effondrement de certaines pêcheries"
          />
          <HintItem
            x={42}
            y={4}
            generation={2}
            intensity={2}
            content="Accélération de l'élévation du niveau de la mer"
          />
          <HintItem
            x={35}
            y={18}
            generation={3}
            intensity={3}
            content="Disparition des récifs coralliens"
          />
          <HintItem
            x={45}
            y={28}
            generation={3}
            intensity={2}
            content="Modification majeure des courants océaniques"
          />
          <HintItem
            x={48}
            y={40}
            generation={3}
            intensity={2}
            content="Extinction d'espèces sensibles"
          />
          <HintItem
            x={45}
            y={10}
            generation={3}
            intensity={2}
            content="Réduction massive de l'oxygène océanique"
          />
          <HintItem
            x={35}
            y={18}
            generation={4}
            intensity={3}
            content="Acidification critique"
          />
          <HintItem
            x={45}
            y={28}
            generation={4}
            intensity={3}
            content="Perturbation totale des cycles climatiques mondiaux"
          />
          <HintItem
            x={48}
            y={40}
            generation={4}
            intensity={3}
            content="Effondrement des chaînes alimentaires marines"
          />
          <HintItem
            x={45}
            y={10}
            generation={4}
            intensity={3}
            content="Désoxygénation accrue"
          />
        </div>
        <div className='right split'>
          <Image src="/personna.png" alt="une personne" width="141" height="388" />
          <HintItem
            x={35}
            y={18}
            generation={1}
            content="Fatigue et faiblesse généralisées"
          />
          <HintItem
            x={55}
            y={25}
            generation={1}
            content="Déshydratation due à une sudation excessive"
          />
          <HintItem
            x={49}
            y={2}
            generation={1}
            content="Maux de tête et étourdissements"
          />
          <HintItem
            x={42}
            y={4}
            generation={1}
            content="Augmentation du rythme cardiaque"
          />

          <HintItem
            x={49}
            y={2}
            generation={2}
            intensity={2}
            content="Confusion mentale et désorientation"
          />
          <HintItem
            x={55}
            y={25}
            generation={2}
            content="Crampes musculaires sévères"
          />
          <HintItem
            x={48}
            y={40}
            generation={2}
            content="Vomissements et nausées"
          />
          <HintItem
            x={42}
            y={4}
            generation={2}
            intensity={2}
            content="Insuffisance rénale due à la déshydratation"
          />

          <HintItem
            x={35}
            y={18}
            generation={3}
            intensity={3}
            content="Dommages aux organes internes"
          />
          <HintItem
            x={45}
            y={28}
            generation={3}
            intensity={2}
            content="Évanouissements fréquents"
          />
          <HintItem
            x={49}
            y={2}
            generation={3}
            intensity={2}
            content="Œdème cérébral (gonflement du cerveau)"
          />
          <HintItem
            x={45}
            y={10}
            generation={3}
            intensity={2}
            content="Dysfonctionnement du système nerveux"
          />

          <HintItem
            x={49}
            y={2}
            generation={4}
            intensity={3}
            content="Dommages irréversibles au cerveau"
          />
          <HintItem
            x={45}
            y={28}
            generation={4}
            intensity={3}
            content="Arrêt cardiaque dû à un effort thermique"
          />
          <HintItem
            x={48}
            y={40}
            generation={4}
            intensity={3}
            content="Syndrome de défaillance multiviscérale"
          />
          <HintItem
            x={45}
            y={10}
            generation={4}
            intensity={3}
            content="Mort par coup de chaleur non traité"
          />
        </div>
    </div>
  );
};

export default HintPage;
