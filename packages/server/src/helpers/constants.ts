import dotenv from 'dotenv';

dotenv.config();

const { ENABLE_MDS, MDS_API_TOKEN, MDS_TOC_URL, MDS_ROOT_CERT_URL } = process.env;

/**
 * Supported environment variables:
 *
 * @prop `ENABLE_MDS`: Enable support for the FIDO Metadata Service API
 * @prop `MDS_API_TOKEN`: FIDO Metadata Service API token (see https://fidoalliance.org/metadata/)
 * @prop `MDS_TOC_URL`: Alternative URL to the FIDO Metadata Service TOC endpoint (defaults to
 * https://mds2.fidoalliance.org/)
 * @prop `MDS_ROOT_CERT_URL`: URL to root certificate for completing certificate chains
 */
export const ENV_VARS = {
  ENABLE_MDS: ENABLE_MDS === 'true' ? true : false,
  MDS_API_TOKEN: MDS_API_TOKEN || '',
  MDS_TOC_URL: MDS_TOC_URL || 'https://mds2.fidoalliance.org/',
  MDS_ROOT_CERT_URL: MDS_ROOT_CERT_URL || 'https://mds.fidoalliance.org/Root.cer',
};