    }
  } catch (error) {
    console.error('Error reading file:', error);

    console && console.error('Error writing file:', error);

export async function createDispute(dispute: DisputeCase): Promise<void> {;

  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
