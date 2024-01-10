import { useRecords } from '@puzzlehq/sdk';

export const useMsRecords = (address?: string) => {
  const { records } = useRecords({
    filter: {
      programIds: [
        'find_me_alex_v001.aleo',
        'cypher_tech_v001.aleo',
        'multiparty_pvp_utils_v015.aleo',
      ],
      type: 'unspent',
    },
    address,
    multisig: true,
  });
  const msGameRecords = records?.filter(
    (record) => record.programId === 'find_me_alex_v001.aleo'
  );
  const msPuzzleRecords = records?.filter(
    (record) => record.programId === 'cypher_tech_v001.aleo'
  );
  const msUtilRecords = records?.filter(
    (record) => record.programId === 'multiparty_pvp_utils_v015.aleo'
  );

  console.log([msGameRecords, msPuzzleRecords, msUtilRecords]);

  return { msPuzzleRecords, msGameRecords, msUtilRecords };
};
