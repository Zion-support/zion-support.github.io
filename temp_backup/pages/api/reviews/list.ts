 x.projectId === r.projectId && x.fromRole !== r.fromRole && x.toRole !== r.toRole && x.approved && (targetType === 'talent' && p.talentSlug === targetId) || (targetType === 'client' && p.clientId === targetId) ) ) .length;
}
}