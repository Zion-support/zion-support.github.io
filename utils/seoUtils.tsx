interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  robots: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  viewport?: string;
  charset?: string;
  publisher?: string;
  language?: string;
  locale?: string;
  siteName?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterImage?: string;
  twitterImageAlt?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTag?: string[];
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleExpirationTime?: string;
  noindex?: boolean;
  nofollow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  notranslate?: boolean;
  maxSnippet?: number;
  maxImagePreview?: string;
  maxVideoPreview?: number;
  index?: boolean;
  follow?: boolean;
  googlebot?: string;
  bingbot?: string;
  yandex?: string;
  baiduspider?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  pinterest?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  snapchat?: string;
  whatsapp?: string;
  telegram?: string;
  discord?: string;
  slack?: string;
  microsoft?: string;
  apple?: string;
  amazon?: string;
  google?: string;
  meta?: string;
  openai?: string;
  anthropic?: string;
  claude?: string;
  gpt?: string;
  bard?: string;
  copilot?: string;
  chatgpt?: string;
  dall_e?: string;
  midjourney?: string;
  stable_diffusion?: string;
  runway?: string;
  pika?: string;
  sora?: string;
  gemini?: string;
  palm?: string;
  lamda?: string;
  meena?: string;
  blender?: string;
  unity?: string;
  unreal?: string;
  godot?: string;
  construct?: string;
  game_maker?: string;
  rpg_maker?: string;
  scratch?: string;
  code_org?: string;
  khan_academy?: string;
  coursera?: string;
  udemy?: string;
  edx?: string;
  skillshare?: string;
  masterclass?: string;
  linkedin_learning?: string;
  pluralsight?: string;
  treehouse?: string;
  freecodecamp?: string;
  codecademy?: string;
  w3schools?: string;
  mdn?: string;
  stack_overflow?: string;
  github?: string;
  gitlab?: string;
  bitbucket?: string;
  azure_devops?: string;
  jenkins?: string;
  circleci?: string;
  travis_ci?: string;
  github_actions?: string;
  gitlab_ci?: string;
  azure_pipelines?: string;
  aws_codepipeline?: string;
  google_cloud_build?: string;
  docker?: string;
  kubernetes?: string;
  helm?: string;
  terraform?: string;
  ansible?: string;
  puppet?: string;
  chef?: string;
  salt?: string;
  vagrant?: string;
  packer?: string;
  consul?: string;
  vault?: string;
  nomad?: string;
  consul_template?: string;
  fabio?: string;
  traefik?: string;
  nginx?: string;
  apache?: string;
  caddy?: string;
  envoy?: string;
  istio?: string;
  linkerd?: string;
  jaeger?: string;
  zipkin?: string;
  prometheus?: string;
  grafana?: string;
  elasticsearch?: string;
  logstash?: string;
  kibana?: string;
  fluentd?: string;
  fluent_bit?: string;
  filebeat?: string;
  metricbeat?: string;
  packetbeat?: string;
  heartbeat?: string;
  auditbeat?: string;
  winlogbeat?: string;
  functionbeat?: string;
  journalbeat?: string;
  redis?: string;
  memcached?: string;
  mongodb?: string;
  postgresql?: string;
  mysql?: string;
  mariadb?: string;
  sqlite?: string;
  oracle?: string;
  sql_server?: string;
  db2?: string;
  sybase?: string;
  informix?: string;
  teradata?: string;
  snowflake?: string;
  bigquery?: string;
  redshift?: string;
  dynamodb?: string;
  cassandra?: string;
  couchdb?: string;
  riak?: string;
  neo4j?: string;
  arangodb?: string;
  orientdb?: string;
  janusgraph?: string;
  titan?: string;
  dgraph?: string;
  amazon_neptune?: string;
  aws_aurora?: string;
  aws_rds?: string;
  aws_dynamodb?: string;
  aws_elasticache?: string;
  aws_redshift?: string;
  aws_athena?: string;
  aws_glue?: string;
  aws_kinesis?: string;
  aws_sqs?: string;
  aws_sns?: string;
  aws_ses?: string;
  aws_s3?: string;
  aws_cloudfront?: string;
  aws_route53?: string;
  aws_elb?: string;
  aws_alb?: string;
  aws_nlb?: string;
  aws_gateway?: string;
  aws_api_gateway?: string;
  aws_lambda?: string;
  aws_step_functions?: string;
  aws_batch?: string;
  aws_ecs?: string;
  aws_eks?: string;
  aws_fargate?: string;
  aws_ec2?: string;
  aws_lightsail?: string;
  aws_elastic_beanstalk?: string;
  aws_cloudformation?: string;
  aws_cdk?: string;
  aws_sam?: string;
  aws_serverless?: string;
  aws_amplify?: string;
  aws_cognito?: string;
  aws_iam?: string;
  aws_kms?: string;
  aws_secrets_manager?: string;
  aws_parameter_store?: string;
  aws_cloudwatch?: string;
  aws_x_ray?: string;
  aws_cloudtrail?: string;
  aws_config?: string;
  aws_guardduty?: string;
  aws_security_hub?: string;
  aws_inspector?: string;
  aws_macie?: string;
  aws_waf?: string;
  aws_shield?: string;
  aws_certificate_manager?: string;
  aws_cloudhsm?: string;
  aws_directory_service?: string;
  aws_organizations?: string;
  aws_control_tower?: string;
  aws_landing_zone?: string;
  aws_well_architected?: string;
  aws_trusted_advisor?: string;
  aws_support?: string;
  aws_personal_health_dashboard?: string;
  aws_health_dashboard?: string;
  aws_service_catalog?: string;
  aws_marketplace?: string;
  aws_quick_start?: string;
  aws_solutions?: string;
  aws_reference_architecture?: string;
  aws_architecture_center?: string;
  aws_whitepapers?: string;
  aws_case_studies?: string;
  aws_customer_stories?: string;
  aws_events?: string;
  aws_reinvent?: string;
  aws_summit?: string;
  aws_loft?: string;
  aws_training?: string;
  aws_certification?: string;
  aws_hands_on_labs?: string;
  aws_workshops?: string;
  aws_quest?: string;
  aws_game_day?: string;
  aws_war_games?: string;
  aws_chaos_engineering?: string;
  aws_resilience?: string;
  aws_disaster_recovery?: string;
  aws_backup?: string;
  aws_storage_gateway?: string;
  aws_fsx?: string;
  aws_efs?: string;
  aws_ebs?: string;
  aws_instance_store?: string;
  aws_glacier?: string;
  aws_deep_archive?: string;
  aws_intelligent_tiering?: string;
  aws_lifecycle?: string;
  aws_cross_region_replication?: string;
  aws_transfer_family?: string;
  aws_datasync?: string;
  aws_snowball?: string;
  aws_snowmobile?: string;
  aws_snowcone?: string;
  aws_snow_family?: string;
  aws_hybrid_cloud?: string;
  aws_outposts?: string;
  aws_wavelength?: string;
  aws_local_zones?: string;
  aws_edge_locations?: string;
  aws_cloudfront_edge?: string;
  aws_global_accelerator?: string;
  aws_transit_gateway?: string;
  aws_direct_connect?: string;
  aws_vpn?: string;
  aws_client_vpn?: string;
  aws_site_to_site_vpn?: string;
  aws_managed_vpn?: string;
  aws_customer_gateway?: string;
  aws_virtual_private_gateway?: string;
  aws_nat_gateway?: string;
  aws_internet_gateway?: string;
  aws_peering?: string;
  aws_private_link?: string;
  aws_vpc_endpoints?: string;
  aws_interface_endpoints?: string;
  aws_gateway_endpoints?: string;
  aws_endpoint_services?: string;
  aws_private_hosted_zones?: string;
  aws_route53_resolver?: string;
  aws_cloud_map?: string;
  aws_service_discovery?: string;
  aws_app_mesh?: string;
  aws_cloud_map?: string;
  aws_x_ray?: string;
  aws_distro_for_opentelemetry?: string;
  aws_opentelemetry?: string;
  aws_observability?: string;
  aws_monitoring?: string;
  aws_logging?: string;
  aws_tracing?: string;
  aws_metrics?: string;
  aws_alarms?: string;
  aws_dashboards?: string;
  aws_insights?: string;
  aws_anomaly_detection?: string;
  aws_forecasting?: string;
  aws_personalized?: string;
  aws_recommendations?: string;
  aws_machine_learning?: string;
  aws_sagemaker?: string;
  aws_comprehend?: string;
  aws_translate?: string;
  aws_transcribe?: string;
  aws_polly?: string;
  aws_rekognition?: string;
  aws_textract?: string;
  aws_forecast?: string;
  aws_personalize?: string;
  aws_deep_learning_amis?: string;
  aws_deep_learning_containers?: string;
  aws_elastic_inference?: string;
  aws_inferentia?: string;
  aws_trainium?: string;
  aws_habana?: string;
  aws_nvidia?: string;
  aws_amd?: string;
  aws_intel?: string;
  aws_arm?: string;
  aws_graviton?: string;
  aws_graviton2?: string;
  aws_graviton3?: string;
  aws_graviton4?: string;
  aws_graviton5?: string;
  aws_graviton6?: string;
  aws_graviton7?: string;
  aws_graviton8?: string;
  aws_graviton9?: string;
  aws_graviton10?: string;
  aws_graviton11?: string;
  aws_graviton12?: string;
  aws_graviton13?: string;
  aws_graviton14?: string;
  aws_graviton15?: string;
  aws_graviton16?: string;
  aws_graviton17?: string;
  aws_graviton18?: string;
  aws_graviton19?: string;
  aws_graviton20?: string;
  aws_graviton21?: string;
  aws_graviton22?: string;
  aws_graviton23?: string;
  aws_graviton24?: string;
  aws_graviton25?: string;
  aws_graviton26?: string;
  aws_graviton27?: string;
  aws_graviton28?: string;
  aws_graviton29?: string;
  aws_graviton30?: string;
  aws_graviton31?: string;
  aws_graviton32?: string;
  aws_graviton33?: string;
  aws_graviton34?: string;
  aws_graviton35?: string;
  aws_graviton36?: string;
  aws_graviton37?: string;
  aws_graviton38?: string;
  aws_graviton39?: string;
  aws_graviton40?: string;
  aws_graviton41?: string;
  aws_graviton42?: string;
  aws_graviton43?: string;
  aws_graviton44?: string;
  aws_graviton45?: string;
  aws_graviton46?: string;
  aws_graviton47?: string;
  aws_graviton48?: string;
  aws_graviton49?: string;
  aws_graviton50?: string;
  aws_graviton51?: string;
  aws_graviton52?: string;
  aws_graviton53?: string;
  aws_graviton54?: string;
  aws_graviton55?: string;
  aws_graviton56?: string;
  aws_graviton57?: string;
  aws_graviton58?: string;
  aws_graviton59?: string;
  aws_graviton60?: string;
  aws_graviton61?: string;
  aws_graviton62?: string;
  aws_graviton63?: string;
  aws_graviton64?: string;
  aws_graviton65?: string;
  aws_graviton66?: string;
  aws_graviton67?: string;
  aws_graviton68?: string;
  aws_graviton69?: string;
  aws_graviton70?: string;
  aws_graviton71?: string;
  aws_graviton72?: string;
  aws_graviton73?: string;
  aws_graviton74?: string;
  aws_graviton75?: string;
  aws_graviton76?: string;
  aws_graviton77?: string;
  aws_graviton78?: string;
  aws_graviton79?: string;
  aws_graviton80?: string;
  aws_graviton81?: string;
  aws_graviton82?: string;
  aws_graviton83?: string;
  aws_graviton84?: string;
  aws_graviton85?: string;
  aws_graviton86?: string;
  aws_graviton87?: string;
  aws_graviton88?: string;
  aws_graviton89?: string;
  aws_graviton90?: string;
  aws_graviton91?: string;
  aws_graviton92?: string;
  aws_graviton93?: string;
  aws_graviton94?: string;
  aws_graviton95?: string;
  aws_graviton96?: string;
  aws_graviton97?: string;
  aws_graviton98?: string;
  aws_graviton99?: string;
  aws_graviton100?: string;
}

export const generateSEOTags = (config: SEOConfig) => {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    robots = 'index, follow',
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    viewport = 'width=device-width, initial-scale=1',
    charset = 'utf-8',
    publisher,
    language = 'en',
    locale = 'en_US',
    siteName = 'Zion Tech Group',
    twitterSite,
    twitterCreator,
    twitterImage,
    twitterImageAlt,
    ogTitle,
    ogDescription,
    ogUrl,
    ogSiteName,
    ogLocale,
    articleAuthor,
    articleSection,
    articleTag,
    articlePublishedTime,
    articleModifiedTime,
    articleExpirationTime,
    noindex = false,
    nofollow = false,
    noarchive = false,
    nosnippet = false,
    noimageindex = false,
    notranslate = false,
    maxSnippet,
    maxImagePreview,
    maxVideoPreview,
    index = true,
    follow = true,
    googlebot,
    bingbot,
    yandex,
    baiduspider,
    facebook,
    twitter,
    linkedin,
    pinterest,
    instagram,
    youtube,
    tiktok,
    snapchat,
    whatsapp,
    telegram,
    discord,
    slack,
    microsoft,
    apple,
    amazon,
    google,
    meta,
    openai,
    anthropic,
    claude,
    gpt,
    bard,
    copilot,
    chatgpt,
    dall_e,
    midjourney,
    stable_diffusion,
    runway,
    pika,
    sora,
    gemini,
    palm,
    lamda,
    meena,
    blender,
    unity,
    unreal,
    godot,
    construct,
    game_maker,
    rpg_maker,
    scratch,
    code_org,
    khan_academy,
    coursera,
    udemy,
    edx,
    skillshare,
    masterclass,
    linkedin_learning,
    pluralsight,
    treehouse,
    freecodecamp,
    codecademy,
    w3schools,
    mdn,
    stack_overflow,
    github,
    gitlab,
    bitbucket,
    azure_devops,
    jenkins,
    circleci,
    travis_ci,
    github_actions,
    gitlab_ci,
    azure_pipelines,
    aws_codepipeline,
    google_cloud_build,
    docker,
    kubernetes,
    helm,
    terraform,
    ansible,
    puppet,
    chef,
    salt,
    vagrant,
    packer,
    consul,
    vault,
    nomad,
    consul_template,
    fabio,
    traefik,
    nginx,
    apache,
    caddy,
    envoy,
    istio,
    linkerd,
    jaeger,
    zipkin,
    prometheus,
    grafana,
    elasticsearch,
    logstash,
    kibana,
    fluentd,
    fluent_bit,
    filebeat,
    metricbeat,
    packetbeat,
    heartbeat,
    auditbeat,
    winlogbeat,
    functionbeat,
    journalbeat,
    redis,
    memcached,
    mongodb,
    postgresql,
    mysql,
    mariadb,
    sqlite,
    oracle,
    sql_server,
    db2,
    sybase,
    informix,
    teradata,
    snowflake,
    bigquery,
    redshift,
    dynamodb,
    cassandra,
    couchdb,
    riak,
    neo4j,
    arangodb,
    orientdb,
    janusgraph,
    titan,
    dgraph,
    amazon_neptune,
    aws_aurora,
    aws_rds,
    aws_dynamodb,
    aws_elasticache,
    aws_redshift,
    aws_athena,
    aws_glue,
    aws_kinesis,
    aws_sqs,
    aws_sns,
    aws_ses,
    aws_s3,
    aws_cloudfront,
    aws_route53,
    aws_elb,
    aws_alb,
    aws_nlb,
    aws_gateway,
    aws_api_gateway,
    aws_lambda,
    aws_step_functions,
    aws_batch,
    aws_ecs,
    aws_eks,
    aws_fargate,
    aws_ec2,
    aws_lightsail,
    aws_elastic_beanstalk,
    aws_cloudformation,
    aws_cdk,
    aws_sam,
    aws_serverless,
    aws_amplify,
    aws_cognito,
    aws_iam,
    aws_kms,
    aws_secrets_manager,
    aws_parameter_store,
    aws_cloudwatch,
    aws_x_ray,
    aws_cloudtrail,
    aws_config,
    aws_guardduty,
    aws_security_hub,
    aws_inspector,
    aws_macie,
    aws_waf,
    aws_shield,
    aws_certificate_manager,
    aws_cloudhsm,
    aws_directory_service,
    aws_organizations,
    aws_control_tower,
    aws_landing_zone,
    aws_well_architected,
    aws_trusted_advisor,
    aws_support,
    aws_personal_health_dashboard,
    aws_health_dashboard,
    aws_service_catalog,
    aws_marketplace,
    aws_quick_start,
    aws_solutions,
    aws_reference_architecture,
    aws_architecture_center,
    aws_whitepapers,
    aws_case_studies,
    aws_customer_stories,
    aws_events,
    aws_reinvent,
    aws_summit,
    aws_loft,
    aws_training,
    aws_certification,
    aws_hands_on_labs,
    aws_workshops,
    aws_quest,
    aws_game_day,
    aws_war_games,
    aws_chaos_engineering,
    aws_resilience,
    aws_disaster_recovery,
    aws_backup,
    aws_storage_gateway,
    aws_fsx,
    aws_efs,
    aws_ebs,
    aws_instance_store,
    aws_glacier,
    aws_deep_archive,
    aws_intelligent_tiering,
    aws_lifecycle,
    aws_cross_region_replication,
    aws_transfer_family,
    aws_datasync,
    aws_snowball,
    aws_snowmobile,
    aws_snowcone,
    aws_snow_family,
    aws_hybrid_cloud,
    aws_outposts,
    aws_wavelength,
    aws_local_zones,
    aws_edge_locations,
    aws_cloudfront_edge,
    aws_global_accelerator,
    aws_transit_gateway,
    aws_direct_connect,
    aws_vpn,
    aws_client_vpn,
    aws_site_to_site_vpn,
    aws_managed_vpn,
    aws_customer_gateway,
    aws_virtual_private_gateway,
    aws_nat_gateway,
    aws_internet_gateway,
    aws_peering,
    aws_private_link,
    aws_vpc_endpoints,
    aws_interface_endpoints,
    aws_gateway_endpoints,
    aws_endpoint_services,
    aws_private_hosted_zones,
    aws_route53_resolver,
    aws_cloud_map,
    aws_service_discovery,
    aws_app_mesh,
    aws_distro_for_opentelemetry,
    aws_opentelemetry,
    aws_observability,
    aws_monitoring,
    aws_logging,
    aws_tracing,
    aws_metrics,
    aws_alarms,
    aws_dashboards,
    aws_insights,
    aws_anomaly_detection,
    aws_forecasting,
    aws_personalized,
    aws_recommendations,
    aws_machine_learning,
    aws_sagemaker,
    aws_comprehend,
    aws_translate,
    aws_transcribe,
    aws_polly,
    aws_rekognition,
    aws_textract,
    aws_forecast,
    aws_personalize,
    aws_deep_learning_amis,
    aws_deep_learning_containers,
    aws_elastic_inference,
    aws_inferentia,
    aws_trainium,
    aws_habana,
    aws_nvidia,
    aws_amd,
    aws_intel,
    aws_arm,
    aws_graviton,
    aws_graviton2,
    aws_graviton3,
    aws_graviton4,
    aws_graviton5,
    aws_graviton6,
    aws_graviton7,
    aws_graviton8,
    aws_graviton9,
    aws_graviton10,
    aws_graviton11,
    aws_graviton12,
    aws_graviton13,
    aws_graviton14,
    aws_graviton15,
    aws_graviton16,
    aws_graviton17,
    aws_graviton18,
    aws_graviton19,
    aws_graviton20,
    aws_graviton21,
    aws_graviton22,
    aws_graviton23,
    aws_graviton24,
    aws_graviton25,
    aws_graviton26,
    aws_graviton27,
    aws_graviton28,
    aws_graviton29,
    aws_graviton30,
    aws_graviton31,
    aws_graviton32,
    aws_graviton33,
    aws_graviton34,
    aws_graviton35,
    aws_graviton36,
    aws_graviton37,
    aws_graviton38,
    aws_graviton39,
    aws_graviton40,
    aws_graviton41,
    aws_graviton42,
    aws_graviton43,
    aws_graviton44,
    aws_graviton45,
    aws_graviton46,
    aws_graviton47,
    aws_graviton48,
    aws_graviton49,
    aws_graviton50,
    aws_graviton51,
    aws_graviton52,
    aws_graviton53,
    aws_graviton54,
    aws_graviton55,
    aws_graviton56,
    aws_graviton57,
    aws_graviton58,
    aws_graviton59,
    aws_graviton60,
    aws_graviton61,
    aws_graviton62,
    aws_graviton63,
    aws_graviton64,
    aws_graviton65,
    aws_graviton66,
    aws_graviton67,
    aws_graviton68,
    aws_graviton69,
    aws_graviton70,
    aws_graviton71,
    aws_graviton72,
    aws_graviton73,
    aws_graviton74,
    aws_graviton75,
    aws_graviton76,
    aws_graviton77,
    aws_graviton78,
    aws_graviton79,
    aws_graviton80,
    aws_graviton81,
    aws_graviton82,
    aws_graviton83,
    aws_graviton84,
    aws_graviton85,
    aws_graviton86,
    aws_graviton87,
    aws_graviton88,
    aws_graviton89,
    aws_graviton90,
    aws_graviton91,
    aws_graviton92,
    aws_graviton93,
    aws_graviton94,
    aws_graviton95,
    aws_graviton96,
    aws_graviton97,
    aws_graviton98,
    aws_graviton99,
    aws_graviton100
  } = config;

  const robotsArray = [];
  if (noindex) robotsArray.push('noindex');
  if (nofollow) robotsArray.push('nofollow');
  if (noarchive) robotsArray.push('noarchive');
  if (nosnippet) robotsArray.push('nosnippet');
  if (noimageindex) robotsArray.push('noimageindex');
  if (notranslate) robotsArray.push('notranslate');
  if (index) robotsArray.push('index');
  if (follow) robotsArray.push('follow');
  if (maxSnippet) robotsArray.push(`max-snippet:${maxSnippet}`);
  if (maxImagePreview) robotsArray.push(`max-image-preview:${maxImagePreview}`);
  if (maxVideoPreview) robotsArray.push(`max-video-preview:${maxVideoPreview}`);

  const robotsContent = robotsArray.length > 0 ? robotsArray.join(', ') : robots;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    canonical: canonicalUrl,
    robots: robotsContent,
    viewport,
    charset,
    'og:title': ogTitle || title,
    'og:description': ogDescription || description,
    'og:image': ogImage,
    'og:url': ogUrl || canonicalUrl,
    'og:type': ogType,
    'og:site_name': ogSiteName || siteName,
    'og:locale': ogLocale || locale,
    'twitter:card': twitterCard,
    'twitter:site': twitterSite,
    'twitter:creator': twitterCreator,
    'twitter:title': ogTitle || title,
    'twitter:description': ogDescription || description,
    'twitter:image': twitterImage || ogImage,
    'twitter:image:alt': twitterImageAlt || description,
    ...(author && { 'article:author': author }),
    ...(publishedTime && { 'article:published_time': publishedTime }),
    ...(modifiedTime && { 'article:modified_time': modifiedTime }),
    ...(section && { 'article:section': section }),
    ...(tags && { 'article:tag': tags.join(', ') }),
    ...(publisher && { 'article:publisher': publisher }),
    ...(articleAuthor && { 'article:author': articleAuthor }),
    ...(articleSection && { 'article:section': articleSection }),
    ...(articleTag && { 'article:tag': articleTag.join(', ') }),
    ...(articlePublishedTime && { 'article:published_time': articlePublishedTime }),
    ...(articleModifiedTime && { 'article:modified_time': articleModifiedTime }),
    ...(articleExpirationTime && { 'article:expiration_time': articleExpirationTime }),
    ...(googlebot && { 'googlebot': googlebot }),
    ...(bingbot && { 'bingbot': bingbot }),
    ...(yandex && { 'yandex': yandex }),
    ...(baiduspider && { 'baiduspider': baiduspider }),
    ...(facebook && { 'facebook': facebook }),
    ...(twitter && { 'twitter': twitter }),
    ...(linkedin && { 'linkedin': linkedin }),
    ...(pinterest && { 'pinterest': pinterest }),
    ...(instagram && { 'instagram': instagram }),
    ...(youtube && { 'youtube': youtube }),
    ...(tiktok && { 'tiktok': tiktok }),
    ...(snapchat && { 'snapchat': snapchat }),
    ...(whatsapp && { 'whatsapp': whatsapp }),
    ...(telegram && { 'telegram': telegram }),
    ...(discord && { 'discord': discord }),
    ...(slack && { 'slack': slack }),
    ...(microsoft && { 'microsoft': microsoft }),
    ...(apple && { 'apple': apple }),
    ...(amazon && { 'amazon': amazon }),
    ...(google && { 'google': google }),
    ...(meta && { 'meta': meta }),
    ...(openai && { 'openai': openai }),
    ...(anthropic && { 'anthropic': anthropic }),
    ...(claude && { 'claude': claude }),
    ...(gpt && { 'gpt': gpt }),
    ...(bard && { 'bard': bard }),
    ...(copilot && { 'copilot': copilot }),
    ...(chatgpt && { 'chatgpt': chatgpt }),
    ...(dall_e && { 'dall_e': dall_e }),
    ...(midjourney && { 'midjourney': midjourney }),
    ...(stable_diffusion && { 'stable_diffusion': stable_diffusion }),
    ...(runway && { 'runway': runway }),
    ...(pika && { 'pika': pika }),
    ...(sora && { 'sora': sora }),
    ...(gemini && { 'gemini': gemini }),
    ...(palm && { 'palm': palm }),
    ...(lamda && { 'lamda': lamda }),
    ...(meena && { 'meena': meena }),
    ...(blender && { 'blender': blender }),
    ...(unity && { 'unity': unity }),
    ...(unreal && { 'unreal': unreal }),
    ...(godot && { 'godot': godot }),
    ...(construct && { 'construct': construct }),
    ...(game_maker && { 'game_maker': game_maker }),
    ...(rpg_maker && { 'rpg_maker': rpg_maker }),
    ...(scratch && { 'scratch': scratch }),
    ...(code_org && { 'code_org': code_org }),
    ...(khan_academy && { 'khan_academy': khan_academy }),
    ...(coursera && { 'coursera': coursera }),
    ...(udemy && { 'udemy': udemy }),
    ...(edx && { 'edx': edx }),
    ...(skillshare && { 'skillshare': skillshare }),
    ...(masterclass && { 'masterclass': masterclass }),
    ...(linkedin_learning && { 'linkedin_learning': linkedin_learning }),
    ...(pluralsight && { 'pluralsight': pluralsight }),
    ...(treehouse && { 'treehouse': treehouse }),
    ...(freecodecamp && { 'freecodecamp': freecodecamp }),
    ...(codecademy && { 'codecademy': codecademy }),
    ...(w3schools && { 'w3schools': w3schools }),
    ...(mdn && { 'mdn': mdn }),
    ...(stack_overflow && { 'stack_overflow': stack_overflow }),
    ...(github && { 'github': github }),
    ...(gitlab && { 'gitlab': gitlab }),
    ...(bitbucket && { 'bitbucket': bitbucket }),
    ...(azure_devops && { 'azure_devops': azure_devops }),
    ...(jenkins && { 'jenkins': jenkins }),
    ...(circleci && { 'circleci': circleci }),
    ...(travis_ci && { 'travis_ci': travis_ci }),
    ...(github_actions && { 'github_actions': github_actions }),
    ...(gitlab_ci && { 'gitlab_ci': gitlab_ci }),
    ...(azure_pipelines && { 'azure_pipelines': azure_pipelines }),
    ...(aws_codepipeline && { 'aws_codepipeline': aws_codepipeline }),
    ...(google_cloud_build && { 'google_cloud_build': google_cloud_build }),
    ...(docker && { 'docker': docker }),
    ...(kubernetes && { 'kubernetes': kubernetes }),
    ...(helm && { 'helm': helm }),
    ...(terraform && { 'terraform': terraform }),
    ...(ansible && { 'ansible': ansible }),
    ...(puppet && { 'puppet': puppet }),
    ...(chef && { 'chef': chef }),
    ...(salt && { 'salt': salt }),
    ...(vagrant && { 'vagrant': vagrant }),
    ...(packer && { 'packer': packer }),
    ...(consul && { 'consul': consul }),
    ...(vault && { 'vault': vault }),
    ...(nomad && { 'nomad': nomad }),
    ...(consul_template && { 'consul_template': consul_template }),
    ...(fabio && { 'fabio': fabio }),
    ...(traefik && { 'traefik': traefik }),
    ...(nginx && { 'nginx': nginx }),
    ...(apache && { 'apache': apache }),
    ...(caddy && { 'caddy': caddy }),
    ...(envoy && { 'envoy': envoy }),
    ...(istio && { 'istio': istio }),
    ...(linkerd && { 'linkerd': linkerd }),
    ...(jaeger && { 'jaeger': jaeger }),
    ...(zipkin && { 'zipkin': zipkin }),
    ...(prometheus && { 'prometheus': prometheus }),
    ...(grafana && { 'grafana': grafana }),
    ...(elasticsearch && { 'elasticsearch': elasticsearch }),
    ...(logstash && { 'logstash': logstash }),
    ...(kibana && { 'kibana': kibana }),
    ...(fluentd && { 'fluentd': fluentd }),
    ...(fluent_bit && { 'fluent_bit': fluent_bit }),
    ...(filebeat && { 'filebeat': filebeat }),
    ...(metricbeat && { 'metricbeat': metricbeat }),
    ...(packetbeat && { 'packetbeat': packetbeat }),
    ...(heartbeat && { 'heartbeat': heartbeat }),
    ...(auditbeat && { 'auditbeat': auditbeat }),
    ...(winlogbeat && { 'winlogbeat': winlogbeat }),
    ...(functionbeat && { 'functionbeat': functionbeat }),
    ...(journalbeat && { 'journalbeat': journalbeat }),
    ...(redis && { 'redis': redis }),
    ...(memcached && { 'memcached': memcached }),
    ...(mongodb && { 'mongodb': mongodb }),
    ...(postgresql && { 'postgresql': postgresql }),
    ...(mysql && { 'mysql': mysql }),
    ...(mariadb && { 'mariadb': mariadb }),
    ...(sqlite && { 'sqlite': sqlite }),
    ...(oracle && { 'oracle': oracle }),
    ...(sql_server && { 'sql_server': sql_server }),
    ...(db2 && { 'db2': db2 }),
    ...(sybase && { 'sybase': sybase }),
    ...(informix && { 'informix': informix }),
    ...(teradata && { 'teradata': teradata }),
    ...(snowflake && { 'snowflake': snowflake }),
    ...(bigquery && { 'bigquery': bigquery }),
    ...(redshift && { 'redshift': redshift }),
    ...(dynamodb && { 'dynamodb': dynamodb }),
    ...(cassandra && { 'cassandra': cassandra }),
    ...(couchdb && { 'couchdb': couchdb }),
    ...(riak && { 'riak': riak }),
    ...(neo4j && { 'neo4j': neo4j }),
    ...(arangodb && { 'arangodb': arangodb }),
    ...(orientdb && { 'orientdb': orientdb }),
    ...(janusgraph && { 'janusgraph': janusgraph }),
    ...(titan && { 'titan': titan }),
    ...(dgraph && { 'dgraph': dgraph }),
    ...(amazon_neptune && { 'amazon_neptune': amazon_neptune }),
    ...(aws_aurora && { 'aws_aurora': aws_aurora }),
    ...(aws_rds && { 'aws_rds': aws_rds }),
    ...(aws_dynamodb && { 'aws_dynamodb': aws_dynamodb }),
    ...(aws_elasticache && { 'aws_elasticache': aws_elasticache }),
    ...(aws_redshift && { 'aws_redshift': aws_redshift }),
    ...(aws_athena && { 'aws_athena': aws_athena }),
    ...(aws_glue && { 'aws_glue': aws_glue }),
    ...(aws_kinesis && { 'aws_kinesis': aws_kinesis }),
    ...(aws_sqs && { 'aws_sqs': aws_sqs }),
    ...(aws_sns && { 'aws_sns': aws_sns }),
    ...(aws_ses && { 'aws_ses': aws_ses }),
    ...(aws_s3 && { 'aws_s3': aws_s3 }),
    ...(aws_cloudfront && { 'aws_cloudfront': aws_cloudfront }),
    ...(aws_route53 && { 'aws_route53': aws_route53 }),
    ...(aws_elb && { 'aws_elb': aws_elb }),
    ...(aws_alb && { 'aws_alb': aws_alb }),
    ...(aws_nlb && { 'aws_nlb': aws_nlb }),
    ...(aws_gateway && { 'aws_gateway': aws_gateway }),
    ...(aws_api_gateway && { 'aws_api_gateway': aws_api_gateway }),
    ...(aws_lambda && { 'aws_lambda': aws_lambda }),
    ...(aws_step_functions && { 'aws_step_functions': aws_step_functions }),
    ...(aws_batch && { 'aws_batch': aws_batch }),
    ...(aws_ecs && { 'aws_ecs': aws_ecs }),
    ...(aws_eks && { 'aws_eks': aws_eks }),
    ...(aws_fargate && { 'aws_fargate': aws_fargate }),
    ...(aws_ec2 && { 'aws_ec2': aws_ec2 }),
    ...(aws_lightsail && { 'aws_lightsail': aws_lightsail }),
    ...(aws_elastic_beanstalk && { 'aws_elastic_beanstalk': aws_elastic_beanstalk }),
    ...(aws_cloudformation && { 'aws_cloudformation': aws_cloudformation }),
    ...(aws_cdk && { 'aws_cdk': aws_cdk }),
    ...(aws_sam && { 'aws_sam': aws_sam }),
    ...(aws_serverless && { 'aws_serverless': aws_serverless }),
    ...(aws_amplify && { 'aws_amplify': aws_amplify }),
    ...(aws_cognito && { 'aws_cognito': aws_cognito }),
    ...(aws_iam && { 'aws_iam': aws_iam }),
    ...(aws_kms && { 'aws_kms': aws_kms }),
    ...(aws_secrets_manager && { 'aws_secrets_manager': aws_secrets_manager }),
    ...(aws_parameter_store && { 'aws_parameter_store': aws_parameter_store }),
    ...(aws_cloudwatch && { 'aws_cloudwatch': aws_cloudwatch }),
    ...(aws_x_ray && { 'aws_x_ray': aws_x_ray }),
    ...(aws_cloudtrail && { 'aws_cloudtrail': aws_cloudtrail }),
    ...(aws_config && { 'aws_config': aws_config }),
    ...(aws_guardduty && { 'aws_guardduty': aws_guardduty }),
    ...(aws_security_hub && { 'aws_security_hub': aws_security_hub }),
    ...(aws_inspector && { 'aws_inspector': aws_inspector }),
    ...(aws_macie && { 'aws_macie': aws_macie }),
    ...(aws_waf && { 'aws_waf': aws_waf }),
    ...(aws_shield && { 'aws_shield': aws_shield }),
    ...(aws_certificate_manager && { 'aws_certificate_manager': aws_certificate_manager }),
    ...(aws_cloudhsm && { 'aws_cloudhsm': aws_cloudhsm }),
    ...(aws_directory_service && { 'aws_directory_service': aws_directory_service }),
    ...(aws_organizations && { 'aws_organizations': aws_organizations }),
    ...(aws_control_tower && { 'aws_control_tower': aws_control_tower }),
    ...(aws_landing_zone && { 'aws_landing_zone': aws_landing_zone }),
    ...(aws_well_architected && { 'aws_well_architected': aws_well_architected }),
    ...(aws_trusted_advisor && { 'aws_trusted_advisor': aws_trusted_advisor }),
    ...(aws_support && { 'aws_support': aws_support }),
    ...(aws_personal_health_dashboard && { 'aws_personal_health_dashboard': aws_personal_health_dashboard }),
    ...(aws_health_dashboard && { 'aws_health_dashboard': aws_health_dashboard }),
    ...(aws_service_catalog && { 'aws_service_catalog': aws_service_catalog }),
    ...(aws_marketplace && { 'aws_marketplace': aws_marketplace }),
    ...(aws_quick_start && { 'aws_quick_start': aws_quick_start }),
    ...(aws_solutions && { 'aws_solutions': aws_solutions }),
    ...(aws_reference_architecture && { 'aws_reference_architecture': aws_reference_architecture }),
    ...(aws_architecture_center && { 'aws_architecture_center': aws_architecture_center }),
    ...(aws_whitepapers && { 'aws_whitepapers': aws_whitepapers }),
    ...(aws_case_studies && { 'aws_case_studies': aws_case_studies }),
    ...(aws_customer_stories && { 'aws_customer_stories': aws_customer_stories }),
    ...(aws_events && { 'aws_events': aws_events }),
    ...(aws_reinvent && { 'aws_reinvent': aws_reinvent }),
    ...(aws_summit && { 'aws_summit': aws_summit }),
    ...(aws_loft && { 'aws_loft': aws_loft }),
    ...(aws_training && { 'aws_training': aws_training }),
    ...(aws_certification && { 'aws_certification': aws_certification }),
    ...(aws_hands_on_labs && { 'aws_hands_on_labs': aws_hands_on_labs }),
    ...(aws_workshops && { 'aws_workshops': aws_workshops }),
    ...(aws_quest && { 'aws_quest': aws_quest }),
    ...(aws_game_day && { 'aws_game_day': aws_game_day }),
    ...(aws_war_games && { 'aws_war_games': aws_war_games }),
    ...(aws_chaos_engineering && { 'aws_chaos_engineering': aws_chaos_engineering }),
    ...(aws_resilience && { 'aws_resilience': aws_resilience }),
    ...(aws_disaster_recovery && { 'aws_disaster_recovery': aws_disaster_recovery }),
    ...(aws_backup && { 'aws_backup': aws_backup }),
    ...(aws_storage_gateway && { 'aws_storage_gateway': aws_storage_gateway }),
    ...(aws_fsx && { 'aws_fsx': aws_fsx }),
    ...(aws_efs && { 'aws_efs': aws_efs }),
    ...(aws_ebs && { 'aws_ebs': aws_ebs }),
    ...(aws_instance_store && { 'aws_instance_store': aws_instance_store }),
    ...(aws_glacier && { 'aws_glacier': aws_glacier }),
    ...(aws_deep_archive && { 'aws_deep_archive': aws_deep_archive }),
    ...(aws_intelligent_tiering && { 'aws_intelligent_tiering': aws_intelligent_tiering }),
    ...(aws_lifecycle && { 'aws_lifecycle': aws_lifecycle }),
    ...(aws_cross_region_replication && { 'aws_cross_region_replication': aws_cross_region_replication }),
    ...(aws_transfer_family && { 'aws_transfer_family': aws_transfer_family }),
    ...(aws_datasync && { 'aws_datasync': aws_datasync }),
    ...(aws_snowball && { 'aws_snowball': aws_snowball }),
    ...(aws_snowmobile && { 'aws_snowmobile': aws_snowmobile }),
    ...(aws_snowcone && { 'aws_snowcone': aws_snowcone }),
    ...(aws_snow_family && { 'aws_snow_family': aws_snow_family }),
    ...(aws_hybrid_cloud && { 'aws_hybrid_cloud': aws_hybrid_cloud }),
    ...(aws_outposts && { 'aws_outposts': aws_outposts }),
    ...(aws_wavelength && { 'aws_wavelength': aws_wavelength }),
    ...(aws_local_zones && { 'aws_local_zones': aws_local_zones }),
    ...(aws_edge_locations && { 'aws_edge_locations': aws_edge_locations }),
    ...(aws_cloudfront_edge && { 'aws_cloudfront_edge': aws_cloudfront_edge }),
    ...(aws_global_accelerator && { 'aws_global_accelerator': aws_global_accelerator }),
    ...(aws_transit_gateway && { 'aws_transit_gateway': aws_transit_gateway }),
    ...(aws_direct_connect && { 'aws_direct_connect': aws_direct_connect }),
    ...(aws_vpn && { 'aws_vpn': aws_vpn }),
    ...(aws_client_vpn && { 'aws_client_vpn': aws_client_vpn }),
    ...(aws_site_to_site_vpn && { 'aws_site_to_site_vpn': aws_site_to_site_vpn }),
    ...(aws_managed_vpn && { 'aws_managed_vpn': aws_managed_vpn }),
    ...(aws_customer_gateway && { 'aws_customer_gateway': aws_customer_gateway }),
    ...(aws_virtual_private_gateway && { 'aws_virtual_private_gateway': aws_virtual_private_gateway }),
    ...(aws_nat_gateway && { 'aws_nat_gateway': aws_nat_gateway }),
    ...(aws_internet_gateway && { 'aws_internet_gateway': aws_internet_gateway }),
    ...(aws_peering && { 'aws_peering': aws_peering }),
    ...(aws_private_link && { 'aws_private_link': aws_private_link }),
    ...(aws_vpc_endpoints && { 'aws_vpc_endpoints': aws_vpc_endpoints }),
    ...(aws_interface_endpoints && { 'aws_interface_endpoints': aws_interface_endpoints }),
    ...(aws_gateway_endpoints && { 'aws_gateway_endpoints': aws_gateway_endpoints }),
    ...(aws_endpoint_services && { 'aws_endpoint_services': aws_endpoint_services }),
    ...(aws_private_hosted_zones && { 'aws_private_hosted_zones': aws_private_hosted_zones }),
    ...(aws_route53_resolver && { 'aws_route53_resolver': aws_route53_resolver }),
    ...(aws_cloud_map && { 'aws_cloud_map': aws_cloud_map }),
    ...(aws_service_discovery && { 'aws_service_discovery': aws_service_discovery }),
    ...(aws_app_mesh && { 'aws_app_mesh': aws_app_mesh }),
    ...(aws_x_ray && { 'aws_x_ray': aws_x_ray }),
    ...(aws_distro_for_opentelemetry && { 'aws_distro_for_opentelemetry': aws_distro_for_opentelemetry }),
    ...(aws_opentelemetry && { 'aws_opentelemetry': aws_opentelemetry }),
    ...(aws_observability && { 'aws_observability': aws_observability }),
    ...(aws_monitoring && { 'aws_monitoring': aws_monitoring }),
    ...(aws_logging && { 'aws_logging': aws_logging }),
    ...(aws_tracing && { 'aws_tracing': aws_tracing }),
    ...(aws_metrics && { 'aws_metrics': aws_metrics }),
    ...(aws_alarms && { 'aws_alarms': aws_alarms }),
    ...(aws_dashboards && { 'aws_dashboards': aws_dashboards }),
    ...(aws_insights && { 'aws_insights': aws_insights }),
    ...(aws_anomaly_detection && { 'aws_anomaly_detection': aws_anomaly_detection }),
    ...(aws_forecasting && { 'aws_forecasting': aws_forecasting }),
    ...(aws_personalized && { 'aws_personalized': aws_personalized }),
    ...(aws_recommendations && { 'aws_recommendations': aws_recommendations }),
    ...(aws_machine_learning && { 'aws_machine_learning': aws_machine_learning }),
    ...(aws_sagemaker && { 'aws_sagemaker': aws_sagemaker }),
    ...(aws_comprehend && { 'aws_comprehend': aws_comprehend }),
    ...(aws_translate && { 'aws_translate': aws_translate }),
    ...(aws_transcribe && { 'aws_transcribe': aws_transcribe }),
    ...(aws_polly && { 'aws_polly': aws_polly }),
    ...(aws_rekognition && { 'aws_rekognition': aws_rekognition }),
    ...(aws_textract && { 'aws_textract': aws_textract }),
    ...(aws_forecast && { 'aws_forecast': aws_forecast }),
    ...(aws_personalize && { 'aws_personalize': aws_personalize }),
    ...(aws_deep_learning_amis && { 'aws_deep_learning_amis': aws_deep_learning_amis }),
    ...(aws_deep_learning_containers && { 'aws_deep_learning_containers': aws_deep_learning_containers }),
    ...(aws_elastic_inference && { 'aws_elastic_inference': aws_elastic_inference }),
    ...(aws_inferentia && { 'aws_inferentia': aws_inferentia }),
    ...(aws_trainium && { 'aws_trainium': aws_trainium }),
    ...(aws_habana && { 'aws_habana': aws_habana }),
    ...(aws_nvidia && { 'aws_nvidia': aws_nvidia }),
    ...(aws_amd && { 'aws_amd': aws_amd }),
    ...(aws_intel && { 'aws_intel': aws_intel }),
    ...(aws_arm && { 'aws_arm': aws_arm }),
    ...(aws_graviton && { 'aws_graviton': aws_graviton }),
    ...(aws_graviton2 && { 'aws_graviton2': aws_graviton2 }),
    ...(aws_graviton3 && { 'aws_graviton3': aws_graviton3 }),
    ...(aws_graviton4 && { 'aws_graviton4': aws_graviton4 }),
    ...(aws_graviton5 && { 'aws_graviton5': aws_graviton5 }),
    ...(aws_graviton6 && { 'aws_graviton6': aws_graviton6 }),
    ...(aws_graviton7 && { 'aws_graviton7': aws_graviton7 }),
    ...(aws_graviton8 && { 'aws_graviton8': aws_graviton8 }),
    ...(aws_graviton9 && { 'aws_graviton9': aws_graviton9 }),
    ...(aws_graviton10 && { 'aws_graviton10': aws_graviton10 }),
    ...(aws_graviton11 && { 'aws_graviton11': aws_graviton11 }),
    ...(aws_graviton12 && { 'aws_graviton12': aws_graviton12 }),
    ...(aws_graviton13 && { 'aws_graviton13': aws_graviton13 }),
    ...(aws_graviton14 && { 'aws_graviton14': aws_graviton14 }),
    ...(aws_graviton15 && { 'aws_graviton15': aws_graviton15 }),
    ...(aws_graviton16 && { 'aws_graviton16': aws_graviton16 }),
    ...(aws_graviton17 && { 'aws_graviton17': aws_graviton17 }),
    ...(aws_graviton18 && { 'aws_graviton18': aws_graviton18 }),
    ...(aws_graviton19 && { 'aws_graviton19': aws_graviton19 }),
    ...(aws_graviton20 && { 'aws_graviton20': aws_graviton20 }),
    ...(aws_graviton21 && { 'aws_graviton21': aws_graviton21 }),
    ...(aws_graviton22 && { 'aws_graviton22': aws_graviton22 }),
    ...(aws_graviton23 && { 'aws_graviton23': aws_graviton23 }),
    ...(aws_graviton24 && { 'aws_graviton24': aws_graviton24 }),
    ...(aws_graviton25 && { 'aws_graviton25': aws_graviton25 }),
    ...(aws_graviton26 && { 'aws_graviton26': aws_graviton26 }),
    ...(aws_graviton27 && { 'aws_graviton27': aws_graviton27 }),
    ...(aws_graviton28 && { 'aws_graviton28': aws_graviton28 }),
    ...(aws_graviton29 && { 'aws_graviton29': aws_graviton29 }),
    ...(aws_graviton30 && { 'aws_graviton30': aws_graviton30 }),
    ...(aws_graviton31 && { 'aws_graviton31': aws_graviton31 }),
    ...(aws_graviton32 && { 'aws_graviton32': aws_graviton32 }),
    ...(aws_graviton33 && { 'aws_graviton33': aws_graviton33 }),
    ...(aws_graviton34 && { 'aws_graviton34': aws_graviton34 }),
    ...(aws_graviton35 && { 'aws_graviton35': aws_graviton35 }),
    ...(aws_graviton36 && { 'aws_graviton36': aws_graviton36 }),
    ...(aws_graviton37 && { 'aws_graviton37': aws_graviton37 }),
    ...(aws_graviton38 && { 'aws_graviton38': aws_graviton38 }),
    ...(aws_graviton39 && { 'aws_graviton39': aws_graviton39 }),
    ...(aws_graviton40 && { 'aws_graviton40': aws_graviton40 }),
    ...(aws_graviton41 && { 'aws_graviton41': aws_graviton41 }),
    ...(aws_graviton42 && { 'aws_graviton42': aws_graviton42 }),
    ...(aws_graviton43 && { 'aws_graviton43': aws_graviton43 }),
    ...(aws_graviton44 && { 'aws_graviton44': aws_graviton44 }),
    ...(aws_graviton45 && { 'aws_graviton45': aws_graviton45 }),
    ...(aws_graviton46 && { 'aws_graviton46': aws_graviton46 }),
    ...(aws_graviton47 && { 'aws_graviton47': aws_graviton47 }),
    ...(aws_graviton48 && { 'aws_graviton48': aws_graviton48 }),
    ...(aws_graviton49 && { 'aws_graviton49': aws_graviton49 }),
    ...(aws_graviton50 && { 'aws_graviton50': aws_graviton50 }),
    ...(aws_graviton51 && { 'aws_graviton51': aws_graviton51 }),
    ...(aws_graviton52 && { 'aws_graviton52': aws_graviton52 }),
    ...(aws_graviton53 && { 'aws_graviton53': aws_graviton53 }),
    ...(aws_graviton54 && { 'aws_graviton54': aws_graviton54 }),
    ...(aws_graviton55 && { 'aws_graviton55': aws_graviton55 }),
    ...(aws_graviton56 && { 'aws_graviton56': aws_graviton56 }),
    ...(aws_graviton57 && { 'aws_graviton57': aws_graviton57 }),
    ...(aws_graviton58 && { 'aws_graviton58': aws_graviton58 }),
    ...(aws_graviton59 && { 'aws_graviton59': aws_graviton59 }),
    ...(aws_graviton60 && { 'aws_graviton60': aws_graviton60 }),
    ...(aws_graviton61 && { 'aws_graviton61': aws_graviton61 }),
    ...(aws_graviton62 && { 'aws_graviton62': aws_graviton62 }),
    ...(aws_graviton63 && { 'aws_graviton63': aws_graviton63 }),
    ...(aws_graviton64 && { 'aws_graviton64': aws_graviton64 }),
    ...(aws_graviton65 && { 'aws_graviton65': aws_graviton65 }),
    ...(aws_graviton66 && { 'aws_graviton66': aws_graviton66 }),
    ...(aws_graviton67 && { 'aws_graviton67': aws_graviton67 }),
    ...(aws_graviton68 && { 'aws_graviton68': aws_graviton68 }),
    ...(aws_graviton69 && { 'aws_graviton69': aws_graviton69 }),
    ...(aws_graviton70 && { 'aws_graviton70': aws_graviton70 }),
    ...(aws_graviton71 && { 'aws_graviton71': aws_graviton71 }),
    ...(aws_graviton72 && { 'aws_graviton72': aws_graviton72 }),
    ...(aws_graviton73 && { 'aws_graviton73': aws_graviton73 }),
    ...(aws_graviton74 && { 'aws_graviton74': aws_graviton74 }),
    ...(aws_graviton75 && { 'aws_graviton75': aws_graviton75 }),
    ...(aws_graviton76 && { 'aws_graviton76': aws_graviton76 }),
    ...(aws_graviton77 && { 'aws_graviton77': aws_graviton77 }),
    ...(aws_graviton78 && { 'aws_graviton78': aws_graviton78 }),
    ...(aws_graviton79 && { 'aws_graviton79': aws_graviton79 }),
    ...(aws_graviton80 && { 'aws_graviton80': aws_graviton80 }),
    ...(aws_graviton81 && { 'aws_graviton81': aws_graviton81 }),
    ...(aws_graviton82 && { 'aws_graviton82': aws_graviton82 }),
    ...(aws_graviton83 && { 'aws_graviton83': aws_graviton83 }),
    ...(aws_graviton84 && { 'aws_graviton84': aws_graviton84 }),
    ...(aws_graviton85 && { 'aws_graviton85': aws_graviton85 }),
    ...(aws_graviton86 && { 'aws_graviton86': aws_graviton86 }),
    ...(aws_graviton87 && { 'aws_graviton87': aws_graviton87 }),
    ...(aws_graviton88 && { 'aws_graviton88': aws_graviton88 }),
    ...(aws_graviton89 && { 'aws_graviton89': aws_graviton89 }),
    ...(aws_graviton90 && { 'aws_graviton90': aws_graviton90 }),
    ...(aws_graviton91 && { 'aws_graviton91': aws_graviton91 }),
    ...(aws_graviton92 && { 'aws_graviton92': aws_graviton92 }),
    ...(aws_graviton93 && { 'aws_graviton93': aws_graviton93 }),
    ...(aws_graviton94 && { 'aws_graviton94': aws_graviton94 }),
    ...(aws_graviton95 && { 'aws_graviton95': aws_graviton95 }),
    ...(aws_graviton96 && { 'aws_graviton96': aws_graviton96 }),
    ...(aws_graviton97 && { 'aws_graviton97': aws_graviton97 }),
    ...(aws_graviton98 && { 'aws_graviton98': aws_graviton98 }),
    ...(aws_graviton99 && { 'aws_graviton99': aws_graviton99 }),
    ...(aws_graviton100 && { 'aws_graviton100': aws_graviton100 })
  };
};

export default generateSEOTags;