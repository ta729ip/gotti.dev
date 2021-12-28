export interface GithubSetting {
  rawcontenturl: string;
  user: string;
  repository: string;
  branch: string;
  directory: string;
}

export const githubSetting = {
  rawcontenturl: "https://raw.githubusercontent.com",
  user: "gotti",
  repository: "gotti.dev",
  branch: "main",
  directory: "www",
  siteUrl: "https://gotti.dev/posts"
};

export const buildSiteURL = (post: string) :string => {
  const ret: string = `${githubSetting.siteUrl}/${post}`;
  return ret;
}

export const buildPostURL = (post: string) :string => {
  return `${githubSetting.rawcontenturl}/${githubSetting.user}/${githubSetting.repository}/${githubSetting.branch}/${githubSetting.directory}/contents/post/${post}/index.md`;
};

export const buildPostListURL = () :string => {
  return `${githubSetting.rawcontenturl}/${githubSetting.user}/${githubSetting.repository}/${githubSetting.branch}/${githubSetting.directory}/contents/blog.yaml`;
};
