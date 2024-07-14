from typing import List

from langchain_community.tools.bing_search import BingSearchResults
from langchain_community.utilities import BingSearchAPIWrapper

from langflow.base.langchain_utilities.model import LCToolComponent
from langflow.inputs import MessageTextInput, SecretStrInput, IntInput, MultilineInput
from langflow.schema import Data
from langchain_core.tools import BaseTool


class BingSearchAPIComponent(LCToolComponent):
    display_name = "Bing Search API"
    description = "Call the Bing Search API."
    name = "BingSearchAPI"

    inputs = [
        SecretStrInput(name="bing_subscription_key", display_name="Bing Subscription Key"),
        MultilineInput(
            name="input_value",
            display_name="Input",
        ),
        MessageTextInput(name="bing_search_url", display_name="Bing Search URL", advanced=True),
        IntInput(name="k", display_name="Number of results", value=4, required=True),
    ]

    def run_model(self) -> List[Data]:
        if self.bing_search_url:
            wrapper = BingSearchAPIWrapper(
                bing_search_url=self.bing_search_url, bing_subscription_key=self.bing_subscription_key
            )
        else:
            wrapper = BingSearchAPIWrapper(bing_subscription_key=self.bing_subscription_key)  # type: ignore
        results = wrapper.results(query=self.input_value, num_results=self.k)
        data = [Data(data=result, text=result["snippet"]) for result in results]
        self.status = data
        return data

    def build_tool(self) -> BaseTool:
        if self.bing_search_url:
            wrapper = BingSearchAPIWrapper(
                bing_search_url=self.bing_search_url, bing_subscription_key=self.bing_subscription_key
            )
        else:
            wrapper = BingSearchAPIWrapper(bing_subscription_key=self.bing_subscription_key)
        return BingSearchResults(api_wrapper=wrapper, num_results=self.k)
